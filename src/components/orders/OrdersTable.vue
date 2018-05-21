<template>
    <auto-table :fields="fields" :name="name" :main-field="mainField" :main-field-title="mainFieldTitle"></auto-table>
</template>
<script>
import AutoTable from '../automatization/AutoTable'

export default {
    data: () => ({
        name: 'orders',
        mainField: 'clients',
        mainFieldTitle: 'Заказ клиента',
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
