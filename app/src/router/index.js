import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movies/MovieList'
import MusicList from '@/components/musics/MusicList'
import BookList from '@/components/books/BookList'
import PhotoList from '@/components/photos/PhotoList'
import movieDetail from '@/components/movies/MovieDetail'
import musicDetail from '@/components/musics/MusicDetail'
import photoDetail from '@/components/photos/PhotoDetail'

Vue.use(Router);

export default new Router({
  mode:'history',
  // base:'/app/',
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
    },
    {
      path: '/musicDetail/:id',
      component: musicDetail
    },
    {
      path: '/photoDetail/:idx',
      component: photoDetail
    }
  ]
})
