<template lang="pug">
  .video__container
    .video_wrapper
      iframe(width='1080' height='720' :src='url' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)
</template>
<script>
export default {
  name: 'Video',
  props: ['url']
}
</script>
<style lang="scss" scoped>
.video__container {
  max-width: 960px;
  margin: 0 auto;
}
.video_wrapper {
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  background-color: $black;
  border: 1rem solid $primary;
  z-index: 1;
}
.video_wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>