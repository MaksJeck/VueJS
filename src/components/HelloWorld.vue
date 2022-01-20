<template>
  <div class="hello">
    <h1>{{ message }}</h1>

    <input type="text" v-model.number="operand1"/>
    <input type="text" v-model.number="operand2"/>
    = {{ result }}
    <hr/>
    <button @click="result = operand1 + operand2">+</button>
    <button @click="result = operand1 - operand2">-</button>
    <button @click="divide">/</button>
    <button @click="multiply(operand1, operand2)">*</button>
    <button @click="result = operand1 ** operand2">^</button>
    <button @click="individe">Целочисленное деление</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
  return {
  disabled: true,
  message: "Сalculator",
  operand1: 0,
  operand2: 0,
  result: 0
  }
  },
  methods: {
  individe() {
    this.result = Math.floor(this.operand1 / this.operand2)
  },
  divide() {
    if (this.operand1 == 0) {
      alert('0 нельзя поделить на число!')
    }
    if (this.operand2 == 0) {
      alert('Нельзя делить на 0')
    } else {
      this.result = this.operand1 / this.operand2 
    }
  },
  multiply(op1, op2) {
    this.result = op1 * op2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
