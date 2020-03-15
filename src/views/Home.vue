<template>
  <!-- Enviar movies e hasSearch para view de rota selecionada -->
  <MovieList :movies="movies" :hasSearch="hasSearch"/>
</template>

<script>

import MovieList from './../components/MovieList.vue'

export default {
  props:{
    movies:{
        type: Array,
        required: false
    },
    hasSearch: {
        type: Boolean,
        required: true
    }
  },
  components:{
    MovieList
  }
}
</script>