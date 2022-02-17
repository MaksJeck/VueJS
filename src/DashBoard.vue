<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
        <v-dialog v-model="dialog" width="500px">
          <template #activator="{ on }">
            <v-btn color="teal" dark v-on="on">Add new cost <v-icon>mdi-plus</v-icon></v-btn>
          </template>

          <v-card>
            <add-payment-form @onAdd="dialog=false" />
          </v-card>

        </v-dialog>
        <payments-display :items="currentElements" />
        <pagination />
       
      </v-col>     

      <v-col> CHART
        <graph />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Graph from './components/Graph.vue'
import { mapMutations, mapActions, mapGetters } from "vuex";
import Pagination from './components/Pagination.vue';

export default {
  name: "App",
  components: {
    Graph,
    PaymentsDisplay: () => import("./components/PaymentsDisplay.vue"),
    AddPaymentForm: () => import("./components/AddPaymentForm.vue"),
    Pagination,
  },
  data() {
    return {
      dialog: false,
      curPage: 1,
      n: 6,
    }
  },
  watch: {
    // paymentsList: function(){
    //   // console.log(newValue, oldValue);
    //   // renderChart(this.paymentsList);
    // }
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    // getFPV() {
    //   return this.$store.getters.getFullPaymentValue
    // },
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    currentElements() {
      // return this.paymentsList.slice(3 * (this.curPage - 1), 3 * (this.curPage - 1) + 3)
      return this.paymentsList.slice(
        this.n * (this.curPage - 1),
        this.n * (this.curPage - 1) + this.n
      );
    },
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
    onShowModal() {
      this.$modal.show("AddPaymentForm", {
        header: "Add payment form",
        content: "AddPaymentForm",
      });
    },
    onChangePage(page) {
      this.curPage = page;
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
    const { page } = this.$route.params;
    if (page) {
      this.curPage = Number(page);
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