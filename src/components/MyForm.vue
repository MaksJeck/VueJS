<template>
  <div>
    <div >
      {{ settings.header }}
    </div>
    <button class="green_btn" @click="show = !show" :name="btn">ADD NEW COST +</button>
    <div class="form"  v-if="show">
      <div class="content">
        <add-payment-form v-if="settings.content === 'AddPaymentForm'"/>
        <auth v-if="settings.content === 'Auth'"/>
      </div>

        <button class="green_btn" @click="show = !show">Close</button>
    </div>
    
  </div>
</template>

<script>
// import AddPaymentForm from './AddPaymentForm.vue';
// import Auth from './Auth.vue';
export default {
  components: { 
    AddPaymentForm: () => import('./AddPaymentForm.vue'),
    Auth: () => import('./Auth.vue') 
  },
  props: {
    settings: Object
  },
  name: "MyForm",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.form {
    background-color: #ecebe8;
    margin-top: 12px;
  width: 100%;
  height: 250px;
  border: 1px solid red;
}
.green_btn {
    margin-top: 12px;
    padding: 10px;
  background: #25a79a;
  color: white;
  border: none;
  border-radius: 3px;
}
.green_btn:hover {
    background: #15645c;
}
.green_btn:active {
    background: #4ebbb0;
}
</style>