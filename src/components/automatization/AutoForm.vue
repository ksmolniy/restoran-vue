<template>
  <el-form ref="form" :model="model" label-width="120px" @submit.native.prevent>
       <el-form-item :label="field.title"                 
            v-for="field in fields"
            :key="field.name">
            <el-input v-model="model[field.name]" v-if="field.type === 'String'"></el-input>
            <el-select v-model="model[field.name]" 
                v-else-if="field.type === 'Group'"
                placeholder="Выберите пункт"
                filterable
                :multiple="field.multi" >
                <el-option
                    v-for="item in secondData[field.name]"
                    :key="item._id"
                    :label="item[field.titleField]"
                    :value="item._id">
                </el-option>
            </el-select>
            <el-upload
                v-if="field.type === 'Image'"
                class="avatar-uploader"
                :show-file-list="false"
                action="#"
                drag
                :before-upload="curringField(beforeUploadImage, field.name)">
                <img v-if="model[field.name]" :src="model[field.name]" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-input-number
                v-else-if="field.type === 'Number'"
                v-model="model[field.name]"></el-input-number>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit()">Сохранить</el-button>
            <el-button @click="$router.push(`/${name}`)">Отмена</el-button>
            <el-button v-if="!isNew" type="danger" @click="deleteModel()">Удалить</el-button>
        </el-form-item>
  </el-form>
</template>
<script>
import { mapActions } from 'vuex'
import { capitalizeFirstLetter } from '../../store/automatizations'

//@TODO Доделать AutoInput

export default {
    data() {
        return {
            model : {
            },
            secondData: {
            }
        }
    },
    props: {
        fields: Array,
        name: String,
    },
    methods : {
        submit() {
            if (this.isNew) {
                this.save({data: this.model}).then(res=>{
                    this.$router.push(`/${this.name}`)
                });
            } else {
                this.update({data: Object.assign({},this.model), id: this.model._id}).then(res=>{
                    this.$router.push(`/${this.name}`)
                });
            }
        },
        deleteModel(){
            this.delete({id : this.model._id}).then(() => {
                this.$router.push(`/${this.name}`)
            })
        },
        action(name, prefix, params) {
            return this.$store.dispatch(`${prefix}${capitalizeFirstLetter(this.name).slice(0,-1)}`, params)
        },
        save(params) {
            return this.action(this.name, 'put', params)
        },
        read(params) {
            return this.action(this.name, 'get', params)
        },
        delete(params) {
            return this.action(this.name, 'delete', params)
        },
        update(params) {
            return this.action(this.name, 'update', params)
        },
        curringField(func, field){
            return (file) => {
                return func(file,field);
            }
        },
        getDataUri(url, callback) {
            const image = new Image();

            image.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
                canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

                canvas.getContext('2d').drawImage(this, 0, 0);

                // ... or get as Data URI
                callback(canvas.toDataURL('image/png'));
            };

            image.src = url;
        },
        beforeUploadImage(file, field) {
            if (file.type.includes('image')) {
                this.getDataUri(URL.createObjectURL(file), (dataUri) => {
                    this.$set(this.model,field, dataUri);
                });
            }
            return false;
        },
    },
    created() {
        
        this.model = {};
        this.isNew = this.$route.params.id === undefined;

        if (!this.isNew) {
            this.read(this.$route.params).then(res => {
                this.model =  Object.assign({}, this.$store.state[this.name.slice(0, -1)]);
            });
        }

        const secondData = this.fields.filter(item => item.type === 'Group');
        secondData.forEach(item => {
             this.$set(this.secondData,item.name, []);
        });

        Promise.all(secondData.map(item => this.$store.dispatch(`get${capitalizeFirstLetter(item.name)}`))).then( res => {
            res.forEach((item,i) => {
                const currData = secondData[i];
                this.$set(this.secondData,currData.name,[].concat(this.$store.state[currData.name]));
            })

        });


    },
    components: {
    }
}
</script>
<style lang="scss">
      .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 100%;
    display: block;
  }
</style>