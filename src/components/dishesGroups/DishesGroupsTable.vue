<template>
    <div>
        <el-button @click="$router.push('dishesGroups/create')"> Добавить группу блюд</el-button>
        <el-table :data="dishesGroups"
            stripe
            height="500">
            <el-table-column
                prop="name"
                label="Название">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">

</style>
