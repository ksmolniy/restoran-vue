<template>
  <el-form ref="form" :model="model" label-width="120px" @submit.native.prevent>
       <el-form-item :label="field.title"                 
            v-for="field in fields"
            :key="field.name">
            <el-input v-model="model[field.name]" v-if="field.type === 'String'"></el-input>
       </el-form-item>
       <el-form-item>
            <el-button type="primary" @click="submit()">Сохранить</el-button>
            <el-button @click="$router.push('/dishesGroups')">Отмена</el-button>
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
                this.update({data: { name: this.model.name}, id: this.model._id}).then(res=>{
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
    },
    created() {
        
        this.model = {};
        this.isNew = this.$route.params.id === undefined;

        if (!this.isNew) {
            this.read(this.$route.params).then(res => {
                this.model =  Object.assign({}, this.$store.state[this.name.slice(0, -1)]);
            });
        }

    },
    components: {
    }
}
</script>
<style lang="scss">

</style>