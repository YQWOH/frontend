<template>
  <div class="container">
    <div>
      <h1 id="currentNumber">{{ currentNumber }}</h1>
      <button
        v-for="(number, key) in numbers"
        @click="append(number)"
        :key="key"
      >
        {{ number }}
      </button>
      <br />
      <button
        v-for="(method, key) in methods"
        @click="method !== '=' ? append(method) : calculate()"
        :key="key"
      >
        {{ method }}
      </button>
      <button id="clear-button" @click="clear">AC</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentNumber: "",
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      methods: ["+", "-", "*", "%", "/", "="],
    };
  },
  methods: {
    append(number) {
      if (
        !this.currentNumber.match(/^[^a-zA-Z0-9]+$/) || 
        this.currentNumber.length !== 0
      ) {
        this.currentNumber = this.currentNumber + number;
      }
    },
    calculate() {
      let convertedNumber = this.convert(this.currentNumber);
      this.currentNumber = convertedNumber;
    },
    convert(str) {
      let output;
      if (str.includes("+")) {
        output = Number(str.split("+")[0]) + Number(str.split("+")[1]);
      } else if (str.includes("-")) {
        output = Number(str.split("-")[0]) - Number(str.split("-")[1]);
      } else if (str.includes("*")) {
        output = Number(str.split("*")[0]) * Number(str.split("*")[1]);
      } else if (str.includes("%")) {
        output = Number(str.split("%")[0]) % Number(str.split("%")[1]);
      }else {
        output = Number(str.split("/")[0]) / Number(str.split("/")[1]);
      }
      return output.toString();
    },
    clear(){
        this.currentNumber = ""
      }
  },
};
</script>

<style scoped>
button {
  width: 50px;
  height: 50px;
  margin: 5px;

}
h1#currentNumber {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  padding: 10px;
  border-radius: 15px;
}
</style>
