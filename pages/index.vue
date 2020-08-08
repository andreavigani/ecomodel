<template lang="pug">
  div
    section.hero#hero
      .hero__bg.fadeIn
      .hero__content.text-center
        div.d-lg-none.mx-auto.mb-4(style="max-width: 80px;")
          img.img-fluid.d-block.fadeIn(src="/img/ecomodel_logo.png" alt="Ecomodel")
        h1.hero__title ecomodel
        p.hero__subtitle.pb-4 La rivoluzione nel modo di gestire gli immobili.
        a.btn.btn-primary.mt-4(href='#' v-scroll-to="'#video'") Guarda come funziona
    section.video#video.bg-gradient.text-center
      .tilt-top
        svg(data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none')
          path.shape-fill(d='M1200 120L0 16.48 0 0 1200 0 1200 120z')
      h2.mb-4(v-scroll-reveal) Cos'è Ecomodel
      Video(url='https://www.youtube.com/embed/dWDyPOWB6VU' v-scroll-reveal)
      .tilt-bottom
        svg(data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none')
          path.shape-fill(d='M1200 120L0 16.48 0 0 1200 0 1200 120z')
    About
    section.text-center
      .tilt-top2
        svg(data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none')
          path.shape-fill(d='M1200 120L0 16.48 0 0 1200 0 1200 120z')
      h2(v-scroll-reveal) Modelli utilizzabili
      p.mb-4.pb-4(v-scroll-reveal) Alcuni esempi di modelli su cui si può usare Ecomodel.
      LightboxGallery(:images="['/img/gallery/modello_ecomodel-1.jpg','/img/gallery/modello_ecomodel-2.jpg', '/img/gallery/modello_ecomodel-3.jpg','/img/gallery/modello_ecomodel-4.jpg']")
    section.bg-black.text-center#projects(v-scroll-reveal)
      h2 Realizzazioni
      p.mb-4.pb-4 I nostri progetti realizzati con Ecomodel.
      VideoSlider(:videos="['https://www.youtube.com/embed/OP39r4pbF6U','https://www.youtube.com/embed/q5xkDgldHjg','https://www.youtube.com/embed/m9OkCp0uHOc','https://www.youtube.com/embed/2vPDPBwCoBk']")
    Pricing
    section.blockquote.bg-primary(v-scroll-reveal)
      .container
        p “Le idee migliori sono proprietà di tutti” 
        span.author - Seneca -
    section#contact(v-scroll-reveal)
      .container
        h2 Contattaci o 
          span richiedi informazioni
        .row
          .col-12.col-lg-6
            p Compila il form qui sotto per inviare la tua richiesta.
            ContactForm
          .col-12.col-lg-6.text-center
            img.img-fluid.mb-4(src="/img/ecomodel_logo.png" style="max-width:200px;")
            .px-lg-4
              h5.mt-4 Oppure invia una email a 
                a(href='mailto:info@ecomodel.it') 
                  strong info@ecomodel.it
              h5 o chiama lo 
                a(href='tel:+39043428234')
                  strong 0434 28234 
                | per qualsiasi informazione.
    Faq(v-scroll-reveal)
</template>
<script>
import Logo from '~/components/Logo.vue'
import Links from '~/components/Links.vue'
import Video from '~/components/Video.vue'
import About from '~/components/About.vue'
import Faq from '~/components/Faq.vue'
import Pricing from '~/components/Pricing.vue'
import Imagee from '~/components/Imagee.vue'
import LightboxGallery from '~/components/LightboxGallery.vue'
import VideoSlider from '~/components/VideoSlider.vue'
import ContactForm from '~/components/ContactForm.vue'
export default {
  components: {
    Logo, Links, Imagee, VideoSlider, LightboxGallery, Video, About, Faq, Pricing, ContactForm
  }
}
</script>
<style lang="scss">
.hero {
  background-color: $black;
  color: $white;
  margin: 0 auto;
  min-height: calc(90vh - 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &__content {
    flex: 1;
    width: 100%;
    z-index: 1;
  }
  &__title {
    font-size: 2.5rem;
    @media only screen and (min-width:$md){
      font-size: 3rem;
    }
    @media only screen and (min-width:$lg){
      font-size: 3.5rem;
    }
  }
  &__subtitle {
    font-size: 1.25rem;
    margin: 1.5rem 0;
  }
  &__bg {
    background-image: url(/img/ecomodel_hero.jpg);
    background-size: cover;
    background-position: top center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    filter: invert(1) grayscale(1) opacity(.25);
    // filter: grayscale(1) opacity(.5) brightness(0.4);
  }
}

.blockquote {
  padding: 6rem 1rem;
  text-align: center;
  background-image: url('/img/ecomodel_logo.png');
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
  font-weight: 600;
  p {
    font-size: 2rem;
    font-style: italic;
  }
}

.video {
  padding: 8rem 0 10rem 0;
}

// Shapes
.tilt-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.tilt-bottom svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 54px;
    transform: rotateY(180deg);
}

.tilt-bottom .shape-fill {
    fill: #f8f9fa;
}

.tilt-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.tilt-top svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 59px;
}

.tilt-top .shape-fill {
    fill: #171717;
}

.tilt-top2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.tilt-top2 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 45px;
    transform: rotateY(180deg);
}

.tilt-top2 .shape-fill {
    fill: #F8F9FA;
}
</style>
