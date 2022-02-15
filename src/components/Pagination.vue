<template>
    <v-pagination
      v-model="page"
      :length="10"
      @click="onClick(page)"
      circle
    ></v-pagination>
</template>

<script>

export default {
  name: "Pagination",
  props: {
    length: Number,
    cur: Number,
    n: Number,
  },
  data(){
    return {
       page: 1,
    }
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(page) {
      if (page < 1 || page > this.amount || page === this.cur) {
        return;
      }
      this.$emit("paginate", page);
    },
  },
};
</script>

<style > 
.center {
  display: flex;
  justify-content: center;
}
.center:hover > div {
  background: gray;
}
</style>