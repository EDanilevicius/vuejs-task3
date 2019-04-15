import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'

Vue.use(VueRouter)

export const createRouter = () => {
  const router = new VueRouter({
    routes,
    mode: 'history'
  })
  return router
}
