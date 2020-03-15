<template>
    <!-- Criação dos cards -->
    <a :href="movieDetails" style="margin: 0 2% 2% 2%;">
        <div class="card" style="width: 18rem;height:450px">
            <img class="card-img-top" :src="url" :title="movie.title">
            <div class="card-body">
                <span style="text-weight:bold">{{ movie.title }}</span><br>    
                <i class="fas fa-star" style="color:#e4c742"></i>
                <span class="rate">{{ movie.vote_average }}/10</span>
            </div>
        </div>
    </a>

</template>

<script>

export default {
    props: {
        movie: {
            type: Object,
            requred: true
        }
    },
    computed: {
        url() {
            return `https://image.tmdb.org/t/p/w185/${this.movie.poster_path}`
        },
        movieDetails(){
            return `/movie/${this.movie.id}`
        }
    }
}
</script>

<style scoped>

    .card:hover{
        cursor: pointer;
        box-shadow: 0px 0px 1px .3px black;
    }
    .image{
        height: 100%;
        position: relative;
        width: 285px;
    }
    .fa-star{
        font-size: 25px;
    }
    a{
        text-decoration: none;
        color: black;
    }
</style>