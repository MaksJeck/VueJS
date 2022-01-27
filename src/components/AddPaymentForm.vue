<template>
  <div>
    <input placeholder="Value" v-model="value" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Date" v-model="date" />
    <button @click="onSaveClick">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: 0,
      category: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
          id: Date.now(),
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
      // console.log(data);
    },
  }
};
</script>

<style >
</style>