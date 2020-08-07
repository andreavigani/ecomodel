<template>
    <div class="gallery__swiper-container swiper-container">
      <div class="swiper-wrapper image__gallery">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="swiper-slide"
        >
          <Imagee :image="image" additionalClass="swiper-lazy"/>
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
      <!-- <div class="swiper-pagination d-none"></div> -->
    </div>
</template>
<script>
import Imagee from '~/components/Imagee.vue'
import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper'
export default {
  name: 'ImageGallery',
  props: ['images'],
  data() {
    return {
      swiper: null
    }
  },
  components: {
    Imagee
  },
  mounted() {
    const self = this
    this.swiper = new Swiper('.gallery__swiper-container', {
      slidesPerView: 'auto',
      direction: 'horizontal',
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        invert: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      },
      watchSlidesVisibility: true,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.image__gallery {
  max-height: 60vh;
  .swiper-slide {
    width: auto;
    max-width: 100%;
    img {
      position: relative;
      max-height: 60vh;
    }
  }
}
.swiper-lazy-preloader {
  opacity: .5;
}
</style>
