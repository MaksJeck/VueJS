<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <input v-model.number="operand1" name="operand1"/>
    <input v-model.number="operand2" name="operand2"/>
    = {{ result }}   

  <!--  <div>
    <button v-for="op in operations" :key="op" @click="calculate(op)" :name="op">
    {{ op }}
    </button>
    </div>-->

<label>
<input type="checkbox" v-model="showvk" />Отобразить экранную клавиатуру
</label>
<div v-if="showvk">
    Виртуальная клавиатура
    <button v-for="btn in 10" :key="btn" @click="inputNum(btn - 1)">
        {{ btn - 1 }}
    </button>
    <button @click="eraseOne" name="e">E</button>
    <br><br>
<label><input type="radio" value="1" v-model="operch" name="operand" checked />Операнд 1</label>
<label><input type="radio" value="2" v-model="operch" name="operand" />Операнд 2</label>
</div>

    <br/>
    <div v-if="error">
    Ошибка!!!
    {{ error }}
    </div>

    <hr/>
    <!-- <button @click="calculate('+')" :name="op">+</button>
    <button @click="calculate('-')" :name="op">-</button> -->
    <!-- <button @click="calculate('/')" :name="op">/</button> -->
    <!-- <button @click="calculate('*')" :name="op">*</button>
    <button @click="calculate('^')" :name="op">^</button> -->
     <div>
    <button v-for="op in operations" :key="op" @click="calculate(op)" :name="op">
    {{ op }}
    </button>
    </div>
    <!-- <button @click="individe" >Целочисленное деление</button> -->
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
      operations: ["+","-","/","*", "%"],
      result: 0,
      error: '',
      showvk: false,
      operch: ""
    }
  },
  methods: {
    calculate(op){
      const operand1 = this.operand1;
      const operand2 = this.operand2;
      const calcOperations = {
        "+": () => operand1 + operand2,
        "-": () => operand1 - operand2,
        "/": () => {
          if (operand2 === 0) {
            this.error = 'Нельзя делить на 0'
            return
            } 
           return operand1 / operand2 
          },
        "*": () => operand1 * operand2,
        "^": () => operand1 ** operand2,
        "%": () => {
          if (operand2 === 0) {
            this.error = 'Нельзя делить на 0'
            return
          }
        return Math.floor(operand1 / operand2)
      } 
      };
      this.result = calcOperations[op]();
    },
    inputNum(i){
      const {operch} = this;
      const input = operch === '1' ? "operand1" : "operand2";
      this[input] = +(this[input] += String(i));
    },
    eraseOne(){
    const {operch} = this;
    const input = operch === '1' ? "operand1" : "operand2";
    this[input]=+String(this[input]).slice(0,-1);
    console.log('eraseOne');
    },
    /*add(){
    this.result = this.operand1 + this.operand2
    },
    substract(){
    this.result = this.operand1 - this.operand2
    },
    multiply() {
    this.result = this.operand1 * this.operand2
    },
    divide() {
      const {operand1, operand2} = this      
      if (operand2 === 0) {
        this.error = 'Нельзя делить на 0'
        return
      } 
      this.result = operand1 / operand2 
    },*/
    /* exponentiation(){
    this.result = this.operand1 ** this.operand2
    }, */
    // individe() {
    //   this.result = Math.floor(this.operand1 / this.operand2)
    // }
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
