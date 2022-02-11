<template>
    <div>
        <v-dialog width="400px" v-model="dialog">
            <button>edit</button>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                dialog: false,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>