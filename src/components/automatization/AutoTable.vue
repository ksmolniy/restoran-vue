<template>
    <div>
        <el-button @click="$router.push(`${name}/create`)"> Добавить группу блюд</el-button>
        <el-table :data="values"
            stripe
            height="500">
            <el-table-column
                prop="name"
                label="Название">
                <template slot-scope="scope">
                    <router-link :to="{path:`/${name}/edit/${scope.row._id}`}"> {{ scope.row.name }} </router-link>
                </template>
            </el-table-column>
            <el-table-column v-for="field in fields"
                :key="field.name"
                :prop="field.name"
                :label="field.title">
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
import { capitalizeFirstLetter } from '../../store/automatizations'

export default {
    props: {
        name: String,
        fields: Array
    },
  data: () => ({
      values: [],
  }),
  methods: {
      deleteItem(id) {
          this.$store.dispatch(`delete${capitalizeFirstLetter(this.name).slice(0, -1)}`,{ id }).then(()=>{
              this.$store.dispatch(`get${capitalizeFirstLetter(this.name) }`);
          });

      }
  },
  created() {
        this.$store.dispatch(`get${capitalizeFirstLetter(this.name)}`).then(() => {
            this.values = [].concat(this.$store.state[this.name]);
        });
  }
}
</script>
<style lang="scss">

</style>
