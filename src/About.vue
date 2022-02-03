<template>
    <div class="about">
        <h1>{{ message }}</h1>
        <router-link to="/add/payment/sport?value=450">Sport 450</router-link>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data(){
            return {
                message: 'This is About page'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>