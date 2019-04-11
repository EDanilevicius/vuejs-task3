import Vue from 'vue'
import App from './App.vue'
import { createRouter } from '../packages/vue-router/index'

export const createApp = () => {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app }
}
