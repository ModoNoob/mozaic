import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import TestContainer from '@/components/TestContainer'
import TestDefault from '@/components/TestDefault'
import TestLeft from '@/components/TestLeft'
import TestRight from '@/components/TestRight'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/test-animations',
      component: TestContainer,
      children: [
        { path: '', component: TestDefault },
        { path: '/test-animations/left', component: TestLeft },
        { path: '/test-animations/right', component: TestRight }
      ]
    }
  ]
})
