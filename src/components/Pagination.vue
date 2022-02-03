<template>
  <div class="center">
    <div @click="onClick(cur - 1)">-</div>
    <div
      v-for="i in amount"
      :key="i"
      :class="{ active: cur === i }"
      @click="onClick(i)">
    {{ i }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    cur: Number,
    n: Number,
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