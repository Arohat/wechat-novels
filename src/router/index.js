import Vue from 'vue'//引入vue
import Router from 'vue-router'//引入vue-router
import HelloWorld from '@/components/HelloWorld'//引入HelloWorld这个模板，其中@：指向src文件
import Test from '@/components/Test'
import SubTest1 from '@/components/SubTest1'
import SubTest2 from '@/components/SubTest2'
import TestUrl from '@/components/TestUrl'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({//使用router的时候new Router
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,/* path里面的路径对应的模板HelloWorld,用HelloWorld替换<router-view/> */
      beforeEnter: (to, from, next) => {
        console.log(to, from);//第一个参数，从哪里来;第二个参数，到哪里去
        next();//进行跳转，如果不想跳转，可以写成：next(false)
      }
    },
    {
      path: '/Test/',
      name: 'Test',
      component: Test,
      children:[
        {
          path: '/SubTest1/:id/:name',
          name: 'SubTest1',
          component: SubTest1
        },
        {
          path: '/SubTest2/',
          name: 'SubTest2',
          component: SubTest2
        }
      ]
    },
    {
      path: '/TestUrl/:userId/:userName',
      name: 'TestUrl',
      component: TestUrl
    },
    {
      path: '/home/',
      redirect: '/'
    },
    {
      path: '/redirect/:userId/:userName',
      redirect: '/TestUrl/:userId/:userName'
    },
    {
      path: '/home/',
      alias: '/abc',
    },
    {
      path: '*',
      component: Error,
    }
  ]
})
