<template>
    <auto-form :name="name" :fields="fields"></auto-form>
</template>
<script>
import AutoForm from '../automatization/AutoForm'

export default {
    data: () => ({
        name: 'dishes',
        fields: [
            {
                name: 'name',
                type: 'String',
                title: 'Название'
            },
            {
                name: 'dishesGroups',
                type: 'Group',
                title: 'Группа блюд',
                titleField: 'name'
            },
            {
                name: 'pic',
                type: 'Image',
                title: 'Изображение блюда'
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