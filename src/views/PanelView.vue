<template>
    <div id="panel">
        현재 카운터의 값 : {{formatCnt}}
    </div>
</template>

<script>
    //import {mapState} from "vuex"
    import { mapGetters } from "vuex"

    export default {
        coumputed: {
            //...mapGetters(['formatCnt'])            
            formatCnt(){
                return this.$store.getters.formatCnt
            },
            //...mapState(['count'])
            /*
            count(){
                return this.$store.state.count
            }*/
            
        }
    }
</script>

<style lang="stylus" scoped>

</style>