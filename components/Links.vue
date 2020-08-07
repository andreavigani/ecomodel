<template>
  <ul :class="`links links--${theme}`" v-scroll-reveal>
    <li v-for="link in links" :key="link.title" class="links__item">
      <a class="links__item__link" :href="link.url" :title="link.title" target="_blank" rel="noopener">
        <i :class="`fa fa-2x fa-${link.icon}`"></i>
        <span class="links__item__link__label">{{link.title}}</span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Links',
  props: ['theme'],
  data() {
    return {
      links: [{
        title: 'Facebook',
        url: 'https://facebook.com/ecomodel',
        icon: 'facebook'
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/ecomodel',
        icon: 'instagram'
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/ecomodel',
        icon: 'twitter'
      },
      {
        title: 'YouTube',
        url: 'https://www.youtube.com/channel/UC7qt4ZcDeArwdhsZXQ-ax7g',
        icon: 'youtube'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
 .links{
   display: inline-flex;
   flex-flow: row wrap;
   justify-content: space-between;
   align-items: 0;
   padding: 0;
   &--light {
     * { color: $black!important;
        border-color: $black!important;}
   }
   &__item{
     position: relative;
     list-style-type: none;
     margin: .75rem;
     flex: 1;
     &__link{
      i {
        margin: 0 auto;
       }
       display: inline-flex;
       align-items: center;
       cursor:pointer; 
       color: $white-light;
       border: 1px solid $white-light;
       text-transform: uppercase;
       font-weight: 400;
       letter-spacing: 1px;
       font-size: .8rem;
       transition: all .4s;
       border-radius: 100%;
       text-align: center;
       width: 3.5rem;
       height: 3.5rem;
       &:hover {
        text-decoration: none;
         border-radius: .5rem;
         background-color:$primary;
         border-color:$primary;
         color: $black;
         .links__item__link__label {
           color: $white;
           opacity: .8;
           transform: translate(-50%, 25px);
         }
       }
       &__label {
        font-size: .7rem;
        transition: .4s;
        transition-delay: .2s;
        position: absolute;
        opacity: 0;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        
      }
     }
   }
 }
</style>
