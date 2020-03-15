import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../views/Home'
import MovieDetail from './../views/Movie'

Vue.use(VueRouter)

//Configurar rotas
export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/' , component: Home },
    { path: '/movie/:id', component: MovieDetail }
  ]
});