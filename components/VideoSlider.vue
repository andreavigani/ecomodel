<template lang="pug">
  #videoslider.swiper-container
    .swiper-wrapper
      .swiper-slide(v-for='(video, index) in videos' :key='index')
        Video(:url="video" ref="videoRef")  
    .swiper-button-prev.swiper-button-white#videoslider-prev(v-if="videos.length > 1")
    .swiper-button-next.swiper-button-white#videoslider-next(v-if="videos.length > 1")
    .swiper-pagination#videoslider-pagination(v-if="videos.length > 1")
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
    const _self = this
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
        effect: 'cube',
        speed: 1000,
        autoplay: false,
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        on: {
          slideChange: function (el) {
            // _self.$refs.videoRef[0].stopVideo()
          },
        }
      }
      const el = document.getElementById('videoslider')
      this.swiper = new Swiper(el, swiperOptions)
    }
  }
}
</script>
<style lang="scss">
.swiper-container {
  padding-bottom: 4rem!important;
  margin-bottom: -2rem!important;
  @media only screen and (min-width:$md){
    margin-bottom: -4rem!important;
  }
}
.swiper-pagination {
  bottom: 0;
  &-bullet {
    width: 16px!important;
    height: 16px!important;
    margin: 0 10px!important;
    background-color: $white!important;
    &-active {
      background-color: $white!important;
    }
  }
}
</style>
