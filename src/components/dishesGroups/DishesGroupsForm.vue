<template>
    <auto-form :name="name" :fields="fields"></auto-form>
</template>
<script>
import AutoForm from '../automatization/AutoForm'

//@TODO isNew => подгрузка данных, если нет, то 

export default {
    data: () => ({
        name: 'dishesGroups',
        fields: [
            {
                name: 'name',
                type: 'String',
                title: 'Название'
            }
        ]
    }),
    components: {
        AutoForm
    }
}
</script>
<style lang="scss">

</style>