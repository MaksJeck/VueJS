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
      <!-- <add-payment-form @addNewPayment="addPayment" /> -->
      TOTAL: {{ getFullPaymentValue }}
      <br>
      <button @click="onShowModal">ShowModal</button>
      <hr />
      <!-- <add-payment-form @addNewPayment="addPayment" /> -->
      <payments-display :items="currentElements" />
      <!-- <pagination :length="12" :cur="curPage" :n="3" @paginate="onChangePage"/> -->
      <pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/>
    </main>
    <!-- <my-form /> -->

    <!-- <button @click="show=!show">ADD NEW COST+ </button>
         <div class="form" v-if="show">
    </div> -->
  </div>
</template>

<script>
// import MyForm from "./components/MyForm.vue";
// import AddPaymentForm from "./components/AddPaymentForm.vue";
// import PaymentsDisplay from "./components/PaymentsDisplay.vue";
// import Pagination from "./components/Pagination.vue";
import { mapMutations, mapActions, mapGetters } from "vuex";
// import HelloWorld from './components/HelloWorld.vue'
// import MyButton from './components/MyButton.vue'

export default {
  name: "App",
  components: {
    Pagination: () => import('./components/Pagination.vue'),
    // MyForm,
    // AddPaymentForm,
    PaymentsDisplay: () => import('./components/PaymentsDisplay.vue'),
    // HelloWorld,
    // MyButton
  },
  data() {
    return {
      curPage: 1,
      n: 10,
      // show: false,
      // paymentsList: [],
    };
  },
  computed: {
    ...mapGetters(['getFullPaymentValue']),
    // getFPV() {
    //   return this.$store.getters.getFullPaymentValue
    // },
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    currentElements(){
      // return this.paymentsList.slice(3 * (this.curPage - 1), 3 * (this.curPage - 1) + 3)
      return this.paymentsList.slice(this.n * (this.curPage - 1), this.n * (this.curPage - 1) + this.n)
    }
  },
  methods: {
    ...mapMutations({
      myMutation: "setPaymentsListData",
    }),
    ...mapActions(["fetchData"]),
    addPayment(data) {
      this.$store.commit("addDataToPaymentsList", data);
      // this.paymentsList = [...this.paymentsList, data];
    },
    onShowModal(){
      this.$modal.show('AddPaymentForm', {
        header: "Add payment form",
        content: "AddPaymentForm"
      })
    },
    onChangePage(page){
      this.curPage = page
    //   this.fetchData(page)
    },
    // fetchData() {
    //   return [
    //     {
    //       id: "1",
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     {
    //       id: "2",
    //       date: "24.03.2020",
    //       category: "Transport",
    //       value: 360,
    //     },
    //     {
    //       id: "3",
    //       date: "24.03.2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //   ];
    // },
  },
  created() {
    // this.fetchData(this.curPage);
    const {page} = this.$route.params
    if(page) {
        this.curPage = Number(page)
    }
    this.fetchData();

    // this.$store.dispatch('fetchData');
    //this.myMutation(this.fetchData());
    //this.$store.commit('setPaymentsListData', this.fetchData());
    //this.paymentsList = this.fetchData();
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
