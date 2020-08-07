<template lang="pug">
  #videoslider.swiper-container
    .swiper-wrapper
      .swiper-slide(v-for='(video, index) in videos' :key='index')
        Video(:url="video")  
    .swiper-button-prev.swiper-button-white#videoslider-prev
    .swiper-button-next.swiper-button-white#videoslider-next
    .swiper-pagination#videoslider-pagination
</template>
<script>
import Video from '~/components/Video.vue'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'VideoSlider',
  props: ['videos'],
  data() {
    return {
      swiper: null
    }
  },
  components: {
    Video
  },
  mounted() {
    if (this.videos.length > 1) {
      const swiperOptions = {
        loop: true,
        pagination: {
          el: '#videoslider-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '#videoslider-next',
          prevEl: '#videoslider-prev'
        },
        effect: 'slide',
        speed: 500,
        autoplay: false,
        keyboard: {
          enabled: true,
          onlyInViewport: false
        }
      }
      const el = document.getElementById('videoslider')
      this.swiper = new Swiper(el, swiperOptions)
    }
  }
}
</script>
<style lang="scss">
</style>
