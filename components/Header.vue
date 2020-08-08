<template lang="pug">
header
  .container-fluid
    nav.navbar.navbar-expand-lg.navbar-light
      nuxt-link.navbar-brand(to='/')
        img.logo.img-fluid(src="/img/ecomodel_logo.png")
      button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-icon
      .collapse.navbar-collapse#navbarSupportedContent
        ul.navbar-nav.mx-auto
          li.nav-item.active
            a.nav-link(href='#' v-scroll-to="'#video'") Cos'è Ecomodel
          li.nav-item
            a.nav-link(href='#' v-scroll-to="'#about'") Caratteristiche
          li.nav-item
            a.nav-link(href='#' v-scroll-to="'#projects'") Realizzazioni
          li.nav-item
            a.nav-link(href='#' v-scroll-to="'#pricing'") Prezzi
          li.nav-item
            a.nav-link(href='#' v-scroll-to="'#faq'") FAQ
        .nav-bar-end
          a.btn.btn-primary(href='#' v-scroll-to="'#contact'") Contatti
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  name: 'Header',
  components: {
    Logo
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  &-brand {
    max-width: 80px;
  }
  .nav-item {
    padding-left: 1rem;
    padding-right: 1rem;
    &.active {
      .nav-link {
        color: $primary;
      }
    }
  }
  .nav-link {
    font-size: 1.1rem;
    font-weight: 700;
    color: $black;
    &:hover {
      color: $primary;
    }
  }
}
</style>
