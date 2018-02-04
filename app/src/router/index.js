import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movies/MovieList'
import MusicList from '@/components/musics/MusicList'
import BookList from '@/components/books/BookList'
import PhotoList from '@/components/photos/PhotoList'
import movieDetail from '@/components/movies/MovieDetail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: MovieList
    },
    {
      path: '/MusicList',
      component: MusicList
    },
    {
      path: '/BookList',
      component: BookList
    },
    {
      path: '/PhotoList',
      component: PhotoList
    },
    {
      path: '/movieDetail/:id',
      component: movieDetail
    }
  ]
})
