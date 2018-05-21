<template>
    <auto-table :fields="fields" :name="name" :main-field="mainField"></auto-table>
</template>
<script>
import AutoTable from '../automatization/AutoTable'

export default {
    data: () => ({
        name: 'prices',
        mainField: 'dishes',
        fields: [{
            name: 'cost',
            title: 'Цена'
        }]
    }),
    components: {
        AutoTable
    }
}
</script>
<style lang="scss">

</style>
