import Vue from 'vue'
import VueRouter from 'vue-router'

import Projects from '@/components/Projects'
import Project from '@/components/Project'

// if dynamic routed, should use props: true
// and one more, have to set { path: '*', component: NotFoundComponent } handle 404 case
const routes = [
  {
    path: '/',
    name: 'projects',
    component: Projects
  },
  {
    path: '/project/:name',
    name: 'project',
    component: Project,
    props: true
  },
  {
    path: '*',
    redirect: '/'
  }
]

// if mode is history, have to set server configuration
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  base: '/',
  routes
})
