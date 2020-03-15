<template>
  <div id="app">
    
    <div class="navbar navbar-light" style="background-color: #e9ecef">
      <div class="container">
        <!-- Link para rota inicial -->
        <router-link :to="'/'" class="goHome">Pagina Inicial</router-link>
          <form v-on:submit.prevent>
            <div class="searchBox">
              <!-- Input para pesquisa -->
                <input type="text" v-model="searched" @input="realizeSearch()"  placeholder="Digite o nome do filme que procura...">
                <i class="fas fa-search" style="cursor:pointer; backogrund-color:white"></i>
                
            </div>

        </form>
      </div>
    </div>

    <div class="container">
      <!-- Enviar movies e hasSearch para view de rota selecionada -->
      <router-view :movies="movies" :hasSearch="hasSearch" ></router-view>

    </div>

  </div>
</template>

<script>

import config from './config/config'
import axios from 'axios'

export default {
    data() {
        return {
            movies: [],
            hasSearch : false,
            searched: ''
        }
    },
    created(){
        this.movies = this.realizeSearch()
    },
    methods: {
        realizeSearch(){
          
          // Adicionar valor booleano do campo de pesquisa
          this.hasSearch = !!this.searched;

          if(this.hasSearch){

              //Consumir API para procurar filme especifico
              axios.get(`${config.apiURL}/search/movie?query=${this.searched}&language=pt-BR"`,{ headers : { 'Authorization': `Bearer ${config.apiToken}`}})
              .then(response =>{
                  this.movies = response.data.results
              })
              .catch(err =>{
                  throw err
              })

          }else{

              //Consumir API para procurar filmes mais populares
              axios.get(config.apiURL + "movie/popular?language=pt-BR",{ headers : { 'Authorization': `Bearer ${config.apiToken}`}})
              .then(response =>{
                  this.movies = response.data.results
              })
              .catch(err =>{
                  throw err
              })

          }

      }
    }
}
</script>

<style scoped>
    
    input{
        border: none;
        outline:none;
        width: 300px ;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .searchBox{
        width: fit-content;
        padding: 1%;
        display: inline-flex;
        border: solid 1px black;
        background-color: white;
    }
    .searchBox i{
      margin-top: 5px;
    }
    form{
      display: inline;
    }
    .goHome{
      color: black;
      cursor: pointer;
      text-decoration: none;
      font-size: 30px;
    }
</style>
