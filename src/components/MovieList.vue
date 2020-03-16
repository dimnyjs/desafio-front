<template>
    <div>
        <h1 class="font-weight-light">{{ hasSearch ? 'Filmes Encontrados' : 'Filmes Populares' }}</h1>

        <div class="container" v-if="movies && movies.length > 0">
            <MovieListItem
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie" />
        </div>

        <p v-else>Nenhum filme encontrado.</p>

    </div>
</template>

<script>

import MovieListItem from './MovieListItem.vue'

export default {
    props: {
        id: {
            type: String,
            required: false
        },
        movies:{
            type: Array,
            required: true
        },
        hasSearch:{
            type: Boolean,
            required: true
        }
    },
    components: {   
        MovieListItem
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
    }
</style>
