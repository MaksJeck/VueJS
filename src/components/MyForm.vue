<template>
  <div>
    <button class="green_btn" @click="show = !show">ADD NEW COST +</button>
    <div class="form" v-if="show">
        <button class="green_btn" @click="show = !show">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
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