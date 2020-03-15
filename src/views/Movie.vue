<template>
  <!-- Enviar id,movies e hasSearch para instancia de MovieDetails -->
  <MovieDetails :id="id" :movies="movies" :hasSearch="hasSearch" />
</template>

<script>

import MovieDetails from './../components/MovieDetails.vue'

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
  data(){
    return this.$route.params
  },
  components:{
    MovieDetails
  }
}
</script>