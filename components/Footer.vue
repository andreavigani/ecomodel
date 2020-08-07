<template>
  <footer v-scroll-reveal>
    <section>
    <h4>Contact for <span>Management</span> & <span>Bookings</span></h4>
    <a class="mail" href="mailto:info@ecomodel.com"> info@ecomodel.com <i class="fa fa-envelope"></i></a><br>
    <Links theme="light" />
    </section>
    <div class="mt-3">Copyright © 2020 <b>Ecomodel</b>. <a href="#" class="text--black" target="_blank" rel="noopener" title="Privacy Policy ">Privacy Policy</a> - <a class="credits" rel="noopener" href="https://www.linkedin.com/in/andrea-vigani/" target="_blank">Credits</a></div>
  </footer>
</template>
<script>
import Links from '~/components/Links.vue'
export default {
  name: 'Footer',
  components: {
    Links
  }
}
</script>
<style lang="scss" scoped>
 footer {
   text-align: center;
   background-color: $gray-light;
   padding: 2rem 1rem;
   font-size: .8rem;
   letter-spacing: 1px;
   text-transform: uppercase;
   a {
     color: $black;
    text-transform: none;
   &.credits {
     text-decoration: underline;
   }
   }
   .mail {
     text-decoration: none;
     border-bottom: 4px solid $primary;
     font-weight: 600;
     color: $black;
     font-size: 1rem;
     margin-top: 2rem;
     margin-bottom: 2rem;
     display: inline-block;
     padding: .5rem 1rem .1rem 1rem;
     transition: all .4s;
      @media only screen and (max-width:$sm){
        font-size: .75rem;
      }
     &:hover {
      border-radius: .75rem;
       background-color: $primary;
       i:before {
         content: "\f2b6";
        }
     }
   }
 }
</style>
