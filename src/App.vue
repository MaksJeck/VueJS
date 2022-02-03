<template>
  <div id="app">
    <div id="nav">
      <router-link to="/dashboard">DashBoard</router-link> | 
      <router-link to="/about">About</router-link>
      <!-- <a href="dashboard">DashBoard</a> /
      <a href="about">About</a> -->
    </div>
    <router-view />

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyButton v-if="show" />
    <button @click="show=!show">show/hide</button> -->
    <!-- <header>
                  <div class="title">My personal costs</div>
                </header>
                <main> -->
    <!-- <add-payment-form @addNewPayment="addPayment" /> -->
    <!-- TOTAL: {{ getFullPaymentValue }}
                  <hr />
                  <add-payment-form @addNewPayment="addPayment" />
                  <payments-display :items="currentElements" /> -->
    <!-- <pagination :length="12" :cur="curPage" :n="3" @paginate="onChangePage"/> -->
    <!-- <pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/>
                </main>
                <my-form /> -->

    <!-- <button @click="show=!show">ADD NEW COST+ </button>
         <div class="form" v-if="show">
    </div> -->
    <!-- <dash-board v-if="page === 'dashboard'" />
    <about v-if="page === 'about'" /> -->
  </div>
</template>

<script>
// import MyForm from "./components/MyForm.vue";
// import AddPaymentForm from "./components/AddPaymentForm.vue";
// import PaymentsDisplay from "./components/PaymentsDisplay.vue";
// import Pagination from "./components/Pagination.vue";
// import { mapMutations, mapActions, mapGetters } from "vuex";
// import DashBoard from "./DashBoard.vue";
// import About from "./About.vue";
// import HelloWorld from './components/HelloWorld.vue'
// import MyButton from './components/MyButton.vue'

export default {
  name: "App",
  components: {
    // Pagination,
    // MyForm,
    // AddPaymentForm,
    // PaymentsDisplay,
    // DashBoard,
    // About,
    // HelloWorld,
    // MyButton
  },
  data() {
    return {
      page: "",
      // curPage: 1,
      // n: 10,
      // show: false,
      // paymentsList: [],
    };
  },
  // computed: {
  //   ...mapGetters(["getFullPaymentValue"]),
  //   // getFPV() {
  //   //   return this.$store.getters.getFullPaymentValue
  //   // },
  //   paymentsList() {
  //     return this.$store.getters.getPaymentList;
  //   },
  //   currentElements() {
  //     // return this.paymentsList.slice(3 * (this.curPage - 1), 3 * (this.curPage - 1) + 3)
  //     return this.paymentsList.slice(
  //       this.n * (this.curPage - 1),
  //       this.n * (this.curPage - 1) + this.n
  //     );
  //   },
  // },
  methods: {
    setPage() {
      this.page = location.pathname.slice(1);
    },
    // ...mapMutations({
    //   myMutation: "setPaymentsListData",
    // }),
    // ...mapActions(["fetchData"]),
    // addPayment(data) {
    //   this.$store.commit("addDataToPaymentsList", data);
    //   // this.paymentsList = [...this.paymentsList, data];
    // },
    // onChangePage(page) {
    //   this.curPage = page;
    //   this.fetchData(page);
    // },
  },
  mounted() {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        history.pushState({}, '', link.href);
        this.setPage();
      });
    });
    this.setPage();
    window.addEventListener("popstate", this.setPage);
  },
  beforeDestroy() {
    window.removeEventListener("popstate", this.setPage);
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

  created() {
    // this.fetchData(this.curPage);
    // this.fetchData();
     this.$store.dispatch('fetchData');
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
