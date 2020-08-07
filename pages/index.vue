<template lang="pug">
  div
    section.hero#hero
      .hero__bg.fadeIn
      .hero__content.text-center
        h1.hero__title Ecomodel
        p.hero__subtitle La rivoluzione nel modo di gestire gli immobili.
        a.btn.btn-primary.mt-4(href='#' v-scroll-to="'#video'") Guarda come funziona
    section.video#video.bg-gradient.text-center(v-scroll-reveal)
      .tilt-top
        svg(data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none')
          path.shape-fill(d='M1200 120L0 16.48 0 0 1200 0 1200 120z')
      h2.mb-4 Cos'è Ecomodel
      Video(url='https://www.youtube.com/embed/dWDyPOWB6VU')
      .tilt-bottom
        svg(data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none')
          path.shape-fill(d='M1200 120L0 16.48 0 0 1200 0 1200 120z')
    section#about(v-scroll-reveal)
      .row.align-items-center
        .col-12.col-lg-6.offset-lg-1
          h2.mb-4
            | Caratteristiche 
            span principali
          h4.mb-4
            strong Ecomodel 
            | è un servizio che ti permette di gestire le informazioni di tutte le tipologie di immobili.
          ul.about__list
            li
              span Ecomodel ti permette di non perdere tempo nella ricerca della informazioni e di non stampare carta.
              span Il modello tridimensionale sarà accessibile da tutti i dispositivi mobili attraverso un applicazione scaricabile gratuitamente.
              span Ecomodel elimina la carta perché tutte le informazioni potranno essere raccolte in un unico file e facilmente condivise.
            li Ecomodel è lo strumento ideale per gestire le informazioni per il superbonus 110% Ecomodel ti permette di raccogliere e organizzare le informazioni degli edifci già realizzati per meglio gestire gli interventi di manutenzione.
            li I disegni, i calcoli dei professionisti potranno finalmente essere raccolti in unico file.
            li Ecomodel può essere utilizzato anche in fase di progettazione perché tutte le soluzioni architettoniche diventano facilmente comprensibili.
            li Con ecomodel è possibile realizzare l’analisi energetica dell’edificio per determinare l’intervento di riqualificazione idoneo. 
            li Ecomodel è pensato per gestire tutte le tipologie di immobili siano essi commerciali, residenziali o industriali. 
            li Con il modello tridimensionale si possono realizzare render dinamici per ogni soluzione progettuale. 
            li Ecomodel è stato pensato anche per la realtà aumentata con un semplice CardBoard potrete navigare all’interno del progetto. 
            li Ecomodel utilizza Bimx come visualizzatore del modello.
        .col-12.col-lg-5
          Imagee(image="/img/ecomodel_logo.png" image-alt="About Ecomodel" additional-class="img-fluid d-block mx-auto fadeIn")
    section.text-center(v-scroll-reveal)
      h2 Modelli utilizzabili
      p.mb-4.pb-4 Alcuni esempi di modelli su cui si può usare Ecomodel.
      LightboxGallery(:images="['/img/gallery/modello_ecomodel-1.jpg','/img/gallery/modello_ecomodel-2.jpg', '/img/gallery/modello_ecomodel-3.jpg','/img/gallery/modello_ecomodel-4.jpg']")
    section.bg-black.text-center(v-scroll-reveal)
      h2 Realizzazioni
      p.mb-4.pb-4 I nostri progetti realizzati con Ecomodel.
      VideoSlider(:videos="['https://www.youtube.com/embed/OP39r4pbF6U','https://www.youtube.com/embed/OP39r4pbF6U', 'https://www.youtube.com/embed/OP39r4pbF6U']")
    section#pricing.text-center(v-scroll-reveal)
      .container
        h2 Prezzi
        p 
          span Ecomodel offre diverse di soluzioni per la gestione.
          span Sono disponibili pacchetti personalizzati annuali per la gestione degli immobili.
          span Il preventivo viene fatto su misura perché dipende dalla tipologia dell’edificio e dalla tipologia di informazioni che vogliono essere gestite.
        .prices
          .prices__item
            div
              h4.prices__item__title Su richiesta
              .prices__item__description Prevede un costo orario per l’aggiornamento del modello, verrà fatto un preventivo prima di iniziare il lavoro.
            div
              .prices__item__price 35€/h
              a.btn.btn-outline-primary.mb-4(href='#' v-scroll-to="'#contact'") Contattaci
          .prices__item
            div
              h4.prices__item__title Pacchetto Base
              .prices__item__description Prevede un aggiornamento del modello mensile di 8 ore.
            div
              .prices__item__price 200€/mese
              a.btn.btn-outline-primary.mb-4(href='#' v-scroll-to="'#contact'") Contattaci
          .prices__item
            div
              h4.prices__item__title Pacchetto Gold
              .prices__item__description Prevede un abbonamento annuale per l’aggiornamento del modello, tutti gli interventi per la gestione del modello sono compresi.
            div
              .prices__item__price 1500€
              a.btn.btn-outline-primary.mb-4(href='#' v-scroll-to="'#contact'") Contattaci
    section.blockquote.bg-primary(v-scroll-reveal)
      .container
        p “Le idee migliori sono proprietà di tutti” 
        span - Seneca -
    section#contact(v-scroll-reveal)
      .container
        h2 Contattaci o 
          span richiedi informazioni
        .row
          .col-12.col-lg-6
            p Compila il form qui sotto per inviare la tua richiesta.
            ContactForm
          .col-12.col-lg-6.border-left.text-center
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
import Faq from '~/components/Faq.vue'
import Imagee from '~/components/Imagee.vue'
import LightboxGallery from '~/components/LightboxGallery.vue'
import VideoSlider from '~/components/VideoSlider.vue'
import ContactForm from '~/components/ContactForm.vue'
export default {
  components: {
    Logo, Links, Imagee, VideoSlider, LightboxGallery, Video, Faq, ContactForm
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
    font-size: 3.5rem;
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
    opacity: .2;
    z-index: 0;
    filter: grayscale(1) opacity(0.2) brightness(0.3);
  }
  .scroll-down {
    z-index: 2;
    margin-top: 4rem;
    a {
    color: $white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: .7rem;
    text-decoration: none;
    }
  }
}
.about {
  &__list {
    list-style-type: none;
    margin-top: 2rem;
    li {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 1.5rem;
      &:hover {
        &:before {
          background-color: $primary;
        }
      }
      &:before {
        transition: all .4s;
        content: '';
        width: 1.1rem;
        height: 1.1rem;
        border: 2px solid $primary;
        display: block;
        position: absolute;
        left: 0;
        top: .25rem;
        border-radius: 100%;
      }
    }
  }
}

.prices {
  display: inline-grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  @media only screen and (min-width:$md){
    grid-template-columns: 1fr 1fr 1fr;
  }
  margin-top: 1.5rem;
  &__item {
    border: 1px solid $primary;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all .5s;
    &:hover {
      transform: translateY(-10px);
    }
    &__title {
      background-color: $primary;
      padding: 1.5rem 1rem;
      color: $white;
    }
    &__description {
      padding: 1.5rem 1rem;
    }
    &__price {
      color: $primary;
      font-weight: 700;
      font-size: 2rem;
      padding: 1.5rem;
    }
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
    fill: #FFFFFF;
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
    fill: #262626;
}


</style>
