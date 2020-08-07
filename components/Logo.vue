<template>
<div class="logo__wrapper" v-scroll-reveal> 
  <nuxt-link title="Ecomodel" to="/">
    <img class="logo" src="/img/ecomodel_logo.png">
  </nuxt-link>
</div>
</template>
<script>
export default {
  name: 'Logo'
}
</script>
<style lang="scss" scoped>
.logo {
  &__wrapper {
    position: relative;
    width: 100%;
    text-align: center;
    padding: 1.5rem .5rem;
  }
  width: calc(100% - 2rem);
  max-width: 500px;
  fill: $primary;
  &:hover {
    fill: #fff;
  }
}
</style>