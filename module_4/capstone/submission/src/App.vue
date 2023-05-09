<template>
  <div class="container">
    <h1 class="title">Currency Converter</h1>
    <div class="currency">
      <div class="controls">
        <select name="" id="" v-model="left.option" @change="changeCurrency">
          <option :value="key" v-for="(rate, key) in rates" :key="key">
          {{ key }}
          </option>
        </select>
        <input type="text" v-model="left.value"/>
      </div>
      
      <div class="controls">
        <select name="" id="" v-model="right.option" >
          <option :value="key" v-for="(rate, key) in rates" :key="key">
            {{ key }}
          </option>
        </select>
        <input type="text" v-model="convertedValue" disabled/>
      </div>
    </div>

    <div>
      <button @click="convertValue">convertValue</button>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default{
  data() {
    return {
      rates: {},
      left: {
        value: "1",
        option: "USD"
      },
      right: {
        value: "",
        option: ""
      },
      convertedValue: null
    }
  },
  methods: {
    fetchData() {
      axios.get("https://api.exchangerate.host/latest?base=USD")
        .then((res) => (this.rates = res.data.rates));
    },
    changeCurrency() {
      axios.get(`https://api.exchangerate.host/latest?base=${this.left.option}`)
        .then((res) => (this.rates = res.data.rates));

      this.convertedValue = null;
    },
    convertValue() {
      this.convertedValue = Number(this.left.value) * Number(this.rates[this.right.option]);
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .title {
    margin-bottom: 50px;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 55px;
    text-align: center;
    color: rgb(218, 189, 108);
    text-shadow: rgb(85, 71, 133) 3px 3px 0px;
  }

  .currency {
    display: flex;
    margin-bottom: 50px;
  }

  .controls {
    margin: 0 15px;
  }

  select {
    display: block;
    width: 100%;
    box-shadow: 0px 1px 0px 0px #1c1b18;
	  background:linear-gradient(to bottom, #eae0c2 5%, #ccc2a6 100%);
	  background-color:#eae0c2;
	  border-radius:15px;
	  border:2px solid #333029;
	  display:inline-block;
	  cursor:pointer;
	  color:#505739;
	  font-family:Arial;
	  font-size:14px;
	  font-weight:bold;
	  padding:12px 16px;
	  text-decoration:none;
	  text-shadow:0px 1px 0px #ffffff;
    margin-bottom: 30px;
  }

  input {
    display: block;
    width: 100%;
    box-shadow: 0px 1px 0px 0px #1c1b18;
	  background-color:#e2dbc8;
	  border-radius:15px;
	  border:2px solid #333029;
	  display:inline-block;
	  color:#505739;
	  font-family:Arial;
	  font-size:14px;
	  font-weight:bold;
	  padding:12px 16px;
	  text-decoration:none;
	  text-shadow:0px 1px 0px #ffffff;
    margin-bottom: 30px;
  }

  button {
    background-color:rgb(218, 189, 108);
	  border-radius:28px;
	  border:1px solid rgb(233, 173, 7);
	  display:inline-block;
	  cursor:pointer;
	  color:#ffffff;
	  font-family:Arial;
	  font-size:17px;
	  padding:16px 31px;
	  text-decoration:none;
	  text-shadow:0px 1px 0px rgb(233, 173, 7);
  }

  button:hover {
	  background-color:rgb(233, 173, 7);
  }

</style>
