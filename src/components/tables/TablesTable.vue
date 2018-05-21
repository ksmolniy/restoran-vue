<template>
    <auto-table :fields="fields" :name="name" :mainField="mainField" :mainFieldTitle="mainFieldTitle"></auto-table>
</template>
<script>
import AutoTable from '../automatization/AutoTable'

export default {
    data: () => ({
        name: 'tables', 
        mainField: 'number',
        mainFieldTitle: 'Номер столика',
        fields: [],
    }),
    components: {
        AutoTable
    }
}
</script>
<style lang="scss">

</style>
