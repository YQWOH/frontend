<template>
  <div class="container mx-auto px-4">
    <p class="text-7xl font-bold text-center my-8">My Pokemons</p>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(pokemon, key) in pokemons" :key="key" class="card">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
          class="display-image"
          :style="`border: 6px solid ${getColorFromType(pokemon.types[0].type.name)}`"
          alt=""
        />
        <!-- <h1>{{ pokemon.name }}</h1> -->
        <p class="text-2xl font-bold text-center my-3 capitalize">{{ pokemon.name }}</p>
        <p class="text-md font-bold text-left">
          ID:  
          <span class="font-normal"> #{{ pokemon.id }}</span>
        </p>
        <p class="text-md font-bold text-left">
          Height:  
          <span class="font-normal"> #{{ pokemon.height }}</span>
        </p>
        <p class="text-md font-bold text-left">
          Weight:  
          <span class="font-normal"> #{{ pokemon.weight }}</span>
        </p>
        <p class="text-md font-bold text-left">
          Abilities:
        </p>
        <span v-for="(ability, key) in pokemon.abilities" :key="key" 
        class="mx-3 inline-block mt-2 ability font-semibold"
        :style="`background: ${getColorFromType(pokemon.types[0].type.name)}`"> 
          {{ ability.ability.name }}
        </span>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { colors } from "./helpers/colors.js"

export default {
  data() {
    return {
      pokemons: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        let { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");

        data.results.map(async (obj) => {
          let { data } = await axios.get(obj.url);
          this.pokemons.push(data);
        });
      } catch(err) {
        alert(err);
      }
    },
    getColorFromType(type) {
      return colors[type]
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
img.display-image {
  width: 180px;
  border-radius: 50%;
  padding: 20px;
  display: block;
  margin: 0 auto;
}

div.card {
  border-radius: 20px;
  background: #fff;
  height: 450px;
  padding: 20px;
  box-shadow: 1px 2px 15px 4px #dadada;
}

body {
  background: #654ea3; 
  background: -webkit-linear-gradient(to right, #654ea3, #eaafc8); 
  background: linear-gradient(to right, #654ea3, #eaafc8);
}

.ability {
  background: red;
  border-radius: 30px;
  padding: 5px 8px;
}

</style>
