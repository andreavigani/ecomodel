<template>
  <picture>
    <img class="img-fluid" :class="additionalclass" :src="image" :alt="imageAlt || 'Ecomodel'" />
  </picture>
</template>
<script>
export default {
  name: 'Imagee',
  props: ['image', 'imageAlt', 'additionalclass']
}
</script>
