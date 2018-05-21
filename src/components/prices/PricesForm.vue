<template>
    <auto-form :name="name" :fields="fields"></auto-form>
</template>
<script>
import AutoForm from '../automatization/AutoForm'

export default {
    data: () => ({
        name: 'prices',
        fields: [
            {
                name: 'dishes',
                type: 'Group',
                title: 'Блюдо',
                titleField: 'name',
            },
            {
                name: 'cost',
                type: 'Number',
                title: 'Цена',
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