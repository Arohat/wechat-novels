import Vue from 'vue'//引入vue
import Router from 'vue-router'//引入vue-router
import HelloWorld from '@/components/HelloWorld'//引入HelloWorld这个模板，其中@：指向src文件
import Test from '@/components/Test'
import SubTest1 from '@/components/SubTest1'
import SubTest2 from '@/components/SubTest2'
import TestUrl from '@/components/TestUrl'
Vue.use(Router)

export default new Router({//使用router的时候new Router
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld/* path里面的路径对应的模板HelloWorld,用HelloWorld替换<router-view/> */
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
    }
  ]
})
