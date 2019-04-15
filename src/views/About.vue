<template>
  <div class="test">
    <h1>
    {{ $route.meta.displayName }}
    <button @click="$router.push({ name: 'Home' })">Go to home</button>
  </h1>
  </div>
</template>

<script>
export default {
  name: 'About'

}
</script>

<style>

</style>
