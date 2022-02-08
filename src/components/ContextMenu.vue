<template>
    <div class="contetx" v-if="isShow">
        <div class="context__item" v-for="(item, idx) in items" :key="idx">
            {{item.text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContextMenu",
        data(){
            return {
                isShow: false,
                items: [],
            }
        },
        methods: {
            onShow(){

            },
            onHide(){

            }
        },
        mounted(){
            this.$context.EventBus.$on('show', this.onShow)
            this.$context.EventBus.$on('hide', this.onHide)
        },
        beforeDestroy(){
            this.$context.EventBus.$off('show', this.onShow)
            this.$context.EventBus.$off('hide', this.onHide)
        }
    }
</script>

<style scoped>
.contetx {
    position: absolute;
    background: rgb(209, 159, 92);
    cursor: pointer;
}
</style>