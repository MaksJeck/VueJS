<template>
    <div class="about">
        <h1>{{ message }}</h1>
        <my-form :settings="{header: 'Auth Form', content: 'Auth'}" v-if="modalShow"/>
        <!-- <router-link to="/add/payment/sport?value=450">Sport 450</router-link> -->
        <router-link :to="{name: 'addpaymentForm', params: {category: 'Sport'}, query: {value: '450'}}">Sport 450</router-link>
    </div>
</template>

<script>
import MyForm from './components/MyForm.vue'
    export default {
  components: { MyForm },
        name: 'About',
        data(){
            return {
                message: 'This is About page',
                modalShow: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>