<template>
    <div>
        <h1 class="font-weight-light" v-if="hasSearch">{{ hasSearch ? 'Filmes Encontrados' : 'Filmes Populares' }}</h1>

        <div v-if="id && !hasSearch">
                <div class="col-md-10 blogShort">
                     <h1>{{ details.title }}</h1>
                     <img :src="url" :title="details.title" class="pull-left img-responsive postImg img-thumbnail margin10"><br>
                    <i class="fas fa-star" style="color:#e4c742"></i>
                    <span class="rate">{{ details.vote_average }}/10 {{ details.tagline ? `"${details.tagline}"` : "" }}</span>

                        <h3>Sipnose</h3>

                    <p>
                     <span>{{ details.overview }}</span>
                    </p>
                 </div>
        </div>
        <div class="container" v-else-if="movies && movies.length > 0">
            <MovieListItem
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie" />
        </div>

        <p v-else>Nenhum filme encontrado.</p>

    </div>
</template>

<script>

import config from './../config/config'
import axios from 'axios'
import MovieListItem from './MovieListItem.vue'

export default {
    data(){
        return{
            details:{}
        }
    },
    props: {
        id: {
            type: String,
            required: false
        },
        movies:{
            type: Array,
            required: false
        },
        hasSearch:{
            type: Boolean,
            required: true
        }
    },
    components: {   
        MovieListItem
    },
    created(){
        axios.get(config.apiURL + `movie/${this.id}?language=pt-BR`,{ headers : { 'Authorization': `Bearer ${config.apiToken}`}})
        .then(response =>{
            this.details = response.data
        })

    },   
    computed: {
        url() {
            return `https://image.tmdb.org/t/p/w500/${this.details.poster_path}`
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
        align-items: flex-start;
        align-content: flex-start;
    }
    .searchBox{
        width: fit-content;
        padding: 1%;
        border: solid 1px black;
    }
    img{
        width: 300px;
    }
</style>