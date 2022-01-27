<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyButton v-if="show" />
    <button @click="show=!show">show/hide</button> -->
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <add-payment-form @addNewPayment="addPayment" />
      <payments-display :items="paymentsList" />
    </main> 
    <my-form/>
    
      <!-- <button @click="show=!show">ADD NEW COST+ </button>
         <div class="form" v-if="show">
    </div> -->
  </div>
</template>

<script>
import MyForm from "./components/MyForm.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
// import HelloWorld from './components/HelloWorld.vue'
// import MyButton from './components/MyButton.vue'

export default {
  name: "App",
  components: {
    MyForm,
    AddPaymentForm,
    PaymentsDisplay,
    // HelloWorld,
    // MyButton
  },
  data() {
    return {
      // show: false,
      paymentsList: [],
    };
  },
  methods: {
    addPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    fetchData() {
      return [
        {
          id: "1",
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: "2",
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: "3",
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
