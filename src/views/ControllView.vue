<template>
    <div>
        <button @click="increase">증가</button>
        <button @click="decrease" style="margin-left:10px">감소</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increase(){
                this.$store.commit('changeCnt', 1);
            },
            decrease(){
                this.$store.state.commit('changeCnt',-1);
            }
        },
        
    }
</script>

<style lang="stylus" scoped>

</style>