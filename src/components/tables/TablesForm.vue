<template>
    <auto-form :name="name" :fields="fields"></auto-form>
</template>
<script>
import AutoForm from '../automatization/AutoForm'

export default {
    data: () => ({
        name: 'tables',
        fields: [
            {
                name: 'number',
                type: 'Number',
                title: 'Номер столика'
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