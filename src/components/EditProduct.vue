
<template>
  <div class="wrapperEdit">
    <div class="selectEdit">
      <select v-model="category">
        <option v-for="(option,index) in options" :key="index">{{ option }}</option>
      </select>
    <input placeholder="Value" v-model.number="value"/>
    <input placeholder="Date" v-model="date" />
    <button @click="editPayment">Save</button>
  </div>
  </div>
</template>

<script>
import {  mapMutations, mapActions } from "vuex";
export default {
  name: "EditPayment",
  props: {
    item: {
      type: Object,
      default: () =>({}),
    },
  },
  data() {
    return {
      date: "",
      category: "",
      value: ""
    };
  },
  computed: {
    options(){
      return this.$store.getters.getcategoryList
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["updatePayment"] ),
    editPayment() {
      this.updatePayment({
        id: this.item.id,
        date: this.item.date,
        category: this.category,
        value: this.value,
      });
      this.$emit("close-edit");
    },
  },
  async created() {
    if(!this.options.length) {
      await this.$store.dispatch('loadCategories')
    }
  },
mounted(){
            this.date = this.item.date,
            this.category = this.item.category,
            this.value = this.item.value,
    
    this.fetchData();
}
};
</script>

<style lang="scss" scoped>
</style>