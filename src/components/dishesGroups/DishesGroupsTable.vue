<template>
    <div>
        <el-button @click="$router.push('dishesGroups/create')"> Добавить группу блюд</el-button>
        <el-table :data="dishesGroups"
            stripe
            height="500">
            <el-table-column
                prop="name"
                label="Название">
                <template slot-scope="scope">
                    <router-link :to="{path:`/dishesGroups/edit/${scope.row._id}`}"> {{ scope.row.name }} </router-link>
                </template>
            </el-table-column>
            <el-table-column
                label="Действия">
                <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" circle @click="deleteItem(scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  computed: {
      dishesGroups () {
          return [] && this.$store.state.dishesGroups;
      }
  },
  methods: {
      deleteItem(id) {
          this.$store.dispatch('deleteDishesGroup',{ id }).then(()=>{
              this.$store.dispatch('getDishesGroups');
          });

      }
  }
}
</script>
<style lang="scss">

</style>
