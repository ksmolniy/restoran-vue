<template>
    <auto-table :fields="fields" :name="name" :main-field-title="mainFieldTitle"></auto-table>
</template>
<script>
import AutoTable from '../automatization/AutoTable'

export default {
    data: () => ({
        name: 'clients',
        mainFieldTitle: 'Имя клиента',
        fields: [{
            name: 'tables',
            title: 'Номер столика'
        }]
    }),
    components: {
        AutoTable
    }
}
</script>
<style lang="scss">

</style>
