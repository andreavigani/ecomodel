<template lang="pug">
footer
  | Copyright © 2020 
  b Ecomodel. 
  |  - 
  a(href='mailto:info@ecomodel.it')
    strong info@ecomodel.it
  |  - 
  a(href='tel:+39043428234')
    strong 0434 28234
  |  - 
  span Via Cavallotti, 1 - 33170 Pordenone, Italia
  |  - 
  a(href="https://www.iubenda.com/privacy-policy/23227623"  target="_blank" title="Privacy Policy") Privacy Policy
  |  - 
  a.credits(rel='noopener' href='https://www.linkedin.com/in/andrea-vigani/' target='_blank') Credits
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
 footer {
   text-align: center;
   background-color: $gray-light;
   padding: 2rem 1rem;
   font-size: .9rem;
   a {
     color: $black;
    text-transform: none;
   &.credits {
     text-decoration: underline;
   }
   }
 }
</style>
