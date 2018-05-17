<template>
    <auto-table :fields="fields" :name="name"></auto-table>
</template>
<script>
import AutoTable from '../automatization/AutoTable'

export default {
    data: () => ({
        name: 'dishesGroups', 
        fields: []
    }),
    components: {
        AutoTable
    }
}
</script>
<style lang="scss">

</style>
