<template>
  <picture>
    <img class="img-fluid" :class="additionalClass" :src="image" :alt="imageAlt || 'Ecomodel'" />
  </picture>
</template>
<script>
export default {
  name: 'Imagee',
  props: ['image', 'imageAlt', 'additionalClass']
}
</script>
