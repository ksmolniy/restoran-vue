<template>
    <auto-form :name="name" :fields="fields"></auto-form>
</template>
<script>
import AutoForm from '../automatization/AutoForm'

export default {
    data: () => ({
        name: 'orders',
        fields: [
            {
                name: 'clients',
                type: 'Group',
                title: 'Клиент',
                titleField: 'name',
            },
            {
                name: 'prices',
                type: 'Group',
                title: 'Блюдо',
                titleField: 'dishes',
                multi: true,
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