<template>
    <el-input v-if="type === 'String'" v-model="inputValue"></el-input>
</template>
<script>
export default {
    model: {
        prop: 'value',
        event: 'change'
    },
    props: ['value', 'type'],
    data: ()=> ({
        inputValue : this.value
    }),
    watch: {
        inputValue: function(val) {
            this.$emit('change', val);
        }
    },
}
</script>
<style lang="scss">

</style>

