<template>
  <div class="about">
    <input type="text" v-model="pesquisa"><button type="button" @click="getRefeicoes(pesquisa)">Pesquisar</button>
    <button type="button" @click="getRefeicoes">Refeições</button>
    <ul>
      <li v-for="prato in refeicoes"> 
        {{ prato.strMeal }}
        <img :src="prato.strMealThumb" alt="">
      </li>
      {{  refeicoes}}
    </ul>
  </div>
</template>

<script setup>
 import { ref, onMounted } from 'vue'
 const pesquisa=ref("")
 const refeicoes=ref([])
 const getRefeicoes=(pesquisa)=>{
  fetch ("https://www.themealdb.com/api/json/v1/1/search.php?f="+pesquisa)
  .then(res=>res.json())
  .then(dados=>refeicoes.value=dados.meals)
 };
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
