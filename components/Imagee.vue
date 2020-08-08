<template>
  <figure class="image-cover">
    <picture>
      <img class="img-fluid" :class="additionalClass" :src="image" :alt="imageAlt || 'Ecomodel'" />
    </picture>
    </figure>
</template>
<script>
export default {
  name: 'Imagee',
  props: ['image', 'imageAlt', 'additionalClass']
}
</script>
<style lang="scss" scoped>
// Images
figure {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 70%;
  img {
    z-index: 1;
    position: relative;
  }
  &.image {
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &.image-cover {
    position: relative;
    height: 100%;
    margin: 0;
    &--full {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 0;
    }
    picture {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      img {
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
