<template lang="pug">
  .video__container
    .video_wrapper
      iframe(ref="videoIframe" width='1280' height='720' :src='`${url}?showinfo=0&controls=2&modestbranding=1&rel=0}`' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen)
</template>
<script>
export default {
  name: 'Video',
  props: ['url'],
  data() {
    return {
      stop: false
    }
  },
  methods: {
    stopVideo(){
      this.$refs.videoIframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    }
  }
}
</script>
<style lang="scss" scoped>
.video__container {
  max-width: calc(100% - 1.5rem);
  @media only screen and (min-width:$lg){
    max-width: 1080px;
  }
  margin: 0 auto;
}
.video_wrapper {
  width: 100%;
  position: relative;
  padding-bottom: 56%; /* 16:9 */
  height: 0;
  background-color: $black;
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