<template lang="pug">
  div
    h1(style='width: 0; height: 0; overflow: hidden; position: absolute;') Ecomodel
    section.hero
      .hero__bg.fadeIn
      .hero__content
        Video(url='https://www.youtube.com/embed/OP39r4pbF6U')
        Links(theme='dark')
          .scroll-down
            a(href='#about') Scroll down
    section#about(v-scroll-reveal)
      .row.align-items-center
        .col-12.col-lg-6.offset-lg-1
          h2
            | Cos'è 
            span Ecomodel
          h2.h4.mb-4
            strong Ecomodel
            |  è un servizio che ti permette di gestire le informazioni di tutte le tipologie di immobili.
          p.text-justify 
            span Ecomodel ti permette di non perdere tempo nella ricerca della informazioni e di non stampare carta
            span Il modello tridimensionale sarà accessibile da tutti i dispositivi mobili attraverso un applicazione scaricabile gratuitamente 
            span Ecomodel è lo strumento ideale per gestire le informazioni per il superbonus 110% Ecomodel ti permette di raccogliere e organizzare le informazioni degli edifci già realizzati per meglio gestire gli interventi di manutenzione 
            span I disegni, i calcoli dei professionisti potranno finalmente essere raccolti in unico file 
            span Ecomodel può essere utilizzato anche in fase di progettazione perché tutte le soluzioni architettoniche diventano facilmente comprensibili 
            span Ecomodel elimina la carta perché tutte le informazioni potranno essere raccolte in un unico file e facilmente condivise
            span Con ecomodel è possibile realizzare l’analisi energetica dell’edificio per determinare l’intervento di riqualificazione idoneo. 
            span Con Ecomodel si rivoluziona il modo di gestire gli immobili. 
            span Ecomodel è pensato per gestire tutte le tipologie di immobili siano essi commerciali, residenziali o industriali. 
            span Con il modello tridimensionale si possono realizzare render dinamici per ogni soluzione progettuale. 
            span Ecomodel è stato pensato anche per la realtà aumentata con un semplice CardBoard potrete navigare all’interno del progetto. 
            span Ecomodel utilizza Bimx come visualizzatore del modello.
        .col-12.col-lg-5
          Imagee(image='/img/ecomodel_logo.png' imagealt='About Ecomodel' additionalclass='img-fluid d-block mx-auto mx-lg-0 about__img fadeIn').
    section.gallery
      ImageGallery(:images="['/img/gallery/modello_ecomodel-1.jpg','/img/gallery/modello_ecomodel-2.jpg', '/img/gallery/modello_ecomodel-3.jpg','/img/gallery/modello_ecomodel-4.jpg']")
    section.text-center
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
          .prices__item__price 35€/h
        .prices__item
          div
            h4.prices__item__title Pacchetto Base
            .prices__item__description Prevede un aggiornamento del modello mensile di 8 ore.
          .prices__item__price 200€/mese
        .prices__item
          div
            h4.prices__item__title Pacchetto Gold
            .prices__item__description Prevede un abbonamento annuale per l’aggiornamento del modello, tutti gli interventi per la gestione del modello sono compresi.
          .prices__item__price 1500€
    Video(url='https://www.youtube.com/embed/OP39r4pbF6U')
    Faq
    blockquote
      p “Le idee migliori sono proprietà di tutti” 
      strong Seneca
</template>
<script>
import Logo from '~/components/Logo.vue'
import Links from '~/components/Links.vue'
import Video from '~/components/Video.vue'
import Faq from '~/components/Faq.vue'
import Imagee from '~/components/Imagee.vue'
import ImageGallery from '~/components/ImageGallery.vue'
export default {
  components: {
    Logo, Links, Imagee, ImageGallery, Video, Faq
  }
}
</script>
<style lang="scss">
.hero {
  background-color: $black;
  margin: 0 auto;
  min-height: calc(100vh - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column wrap;
  position: relative;
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
    // filter: grayscale(1) opacity(0.2) contrast(2);
  }
  &__content {
    width: 100%;
    z-index: 1;
  }
  .scroll-down {
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
  background-color: $gray-light;
  &__content {
    i {
      font-weight: 500;
    }
    u {
      font-weight: 600;
      text-decoration: none;
      border-bottom: 4px solid $primary;
      &:hover {
        background-color: $primary;
      }
    }
    span {
      font-weight: 500;
      color: $primary;
      background-color: $black;
      text-decoration: none!important;
      padding: 0 .4rem; letter-spacing: 1px;
      &:hover {
        color: $black;
        background-color: $primary;
      }
    }
  }
  &__img {
    border-radius: 1rem;
    margin: 0 auto;
    max-height: 700px;
    transition: all .4s;
    &:hover {
      border-radius: 3rem;
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
  &__item {
    border: 1px solid $primary;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      color: $primary;
      margin-bottom: 1.5rem;
    }
    &__price {
      color: $primary;
      font-weight: 700;
      font-size: 2rem;
    }
    &__description {

    }
  }
}
blockquote {
  text-align: center;
  p {
    font-size: 2rem;
    font-style: italic;
  }
}
.gallery {
  padding-left: 0;
  padding-right: 20px;
  background-color: $black;
}
</style>
