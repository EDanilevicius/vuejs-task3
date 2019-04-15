<template>
  <div class="app-header-wrapper">
    <AppNav :navigation="navigation"/>
    <header class="app-header">
      <div class="app-header__content">
        <h1>Vardas Pavarde</h1>
        <h2>Portfolio</h2>
      </div>
    </header>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import routes from '@/routes'
export default {
  name: 'AppHeader',
  components: {
    AppNav
  },
    computed: {
        navigation () {
            return routes.filter(route => route.meta.displayName)
            .map(route => {
                return {
                    name: route.meta.displayName,
                    to: {
                        name: route.name
                    }
                }
            })
        }
    }
}
</script>

<style lang='scss'>
.app-header-wrapper {
  background-color: royalblue;
  height: 50%;
  width: 100%;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  &__content{
    color: white;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
