<template>
    <auto-form :name="name" :fields="fields"></auto-form>
</template>
<script>
import AutoForm from '../automatization/AutoForm'

export default {
    data: () => ({
        name: 'clients',
        fields: [
            {
                name: 'name',
                type: 'String',
                title: 'Имя клиента'
            },
            {
                name: 'tables',
                type: 'Group',
                title: 'Номер столика',
                titleField: 'number'
            },
        ]
    }),
    components: {
        AutoForm
    }
}
</script>
<style lang="scss">

</style>