<template>
  <el-form ref="form" :model="model" label-width="120px" @submit.native.prevent>
       <el-form-item label="Название">
           <el-input v-model="model.name"></el-input>
       </el-form-item>
       <el-form-item>
            <el-button type="primary" @click="submit()">Сохранить</el-button>
            <el-button @click="$router.push('/dishesGroups')">Отмена</el-button>
            <el-button type="danger" @click="deleteModel()">Удалить</el-button>
        </el-form-item>
  </el-form>
</template>
<script>
import { mapActions } from 'vuex'

//@TODO isNew => подгрузка данных, если нет, то 

export default {
    data() {
        return {
            model : {
            }
        }
    },
    computed: {
    },
    methods : {
        submit() {
            if (this.isNew) {
                this.save({data: this.model}).then(res=>{
                    this.$router.push('/dishesGroups')
                });
            } else {
                this.update({data: { name: this.model.name}, id: this.model._id}).then(res=>{
                    this.$router.push('/dishesGroups')
                });
            }
        },
        deleteModel(){
            this.delete({id : this.model._id}).then(() => {
                this.$router.push('/dishesGroups')
            })
        },
        ...mapActions({
            save: 'putDishesGroup',
            update: 'updateDishesGroup',
            read: 'getDishesGroup',
            delete: 'deleteDishesGroup'
        })
    },
    beforeCreate() {
        this.isNew = this.$route.params.id === undefined;

        if (!this.isNew) {
            this.$store.dispatch('getDishesGroup', this.$route.params).then(res => {
                this.$route.meta.breadcrumb = res.name;
                this.model =  Object.assign({}, this.$store.state.dishesGroup);
            });
        }

        this.model = {};
    }
}
</script>
<style lang="scss">

</style>