<template lang="pug">
div
  v-gallery(:images="images" :index="index" @close="index = null")
  .row
    .col.col-lg-6(v-for="(url, imgIndex) in images" :key="imgIndex")
      .image(@click="index = imgIndex")
        img.img-fluid(:src="url")
</template>
<script>
export default {
  name: 'LightboxGallery',
  props: ['images'],
  data() {
    return {
      index: null
    }
  }
}
</script>
<style lang="scss">
.blueimp-gallery {
  background: rgba($white,.8);
}
@media only screen and (min-width:$lg){
  .col {
    &:nth-child(2) {
      margin-top: 200px;
    }
    &:nth-child(3) {
      margin-top: -200px;
    }
    .image {
      transition: all .4s;
      &:hover {
        filter: invert(1) grayscale(1);
        opacity: .75;
      }
    }
  }
}
</style>
