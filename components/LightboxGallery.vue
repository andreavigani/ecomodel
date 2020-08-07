<template lang="pug">
div
  v-gallery(:images="images" :index="index" @close="index = null")
  .row
    .col-6.col-lg-3(v-for="(url, imgIndex) in images" :key="imgIndex")
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
</style>
