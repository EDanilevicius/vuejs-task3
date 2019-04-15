<template>
        <div class="header-menu">
        <ul class="header-menu__ul">
          <RouterLink :to="{ path: '/' }">HOME</RouterLink>
          <RouterLink :to="{ path: '/about' }">ABOUT</RouterLink>
          <RouterLink :to="{ path: '/contacts' }">CONTACTS</RouterLink>
        </ul>
      </div>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss">
.header-menu {

  &__ul {
    margin-right: 50px;
    display: flex;
    justify-content: right;
    a {
      list-style-type: none;
      padding: 10px;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
