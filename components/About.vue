<template lang="pug">
  section#about.bg-light(v-scroll-reveal)
    .container-custom
      .row.align-items-center
        .col.col-12.col-lg-6
          h2.mb-4
            | Caratteristiche 
            span principali
          h4.mb-4
            strong Ecomodel 
            | è un servizio che ti permette di gestire le informazioni di tutte le tipologie di immobili.
          ul.about__list
            li Ecomodel ti permette di 
              u non perdere tempo 
              | nella ricerca della informazioni e di 
              u non stampare carta.
            li Il modello tridimensionale è accessibile da 
              u tutti i dispositivi mobili 
              | attraverso un 
              u applicazione scaricabile gratuitamente.
            li Ecomodel è lo strumento ideale per gestire le informazioni per il 
              u superbonus 110%.
            li Ecomodel ti permette di raccogliere e organizzare le informazioni su edifici già realizzati per meglio 
              u gestire gli interventi di manutenzione.
            li I disegni e tutti i documenti raccolti dalle varie figure professionali (progettisti, manutentori) potranno finalmente essere raccolti in 
              u unico file.
            li Ecomodel può essere utilizzato anche in fase di progettazione perché tutte le 
              u soluzioni architettoniche diventano facilmente comprensibili e facilmente modificabili.
        .col.col-12.col-lg-6
          Imagee(image="/img/screenshot-2.png" image-alt="About Ecomodel" additional-class="img-fluid d-block mx-auto fadeIn")
      .py-2.py-lg-4
      .row.align-items-center
        .col.col-12.col-lg-6.order-1.order-lg-2
          ul.about__list
            li Ecomodel 
              u elimina la carta 
              | perché tutte le informazioni potranno essere raccolte in un unico file e facilmente condivise.
            li Con Ecomodel è possibile realizzare l’
              u analisi energetica dell’edificio 
              | per determinare l’intervento di riqualificazione idoneo.
            li Con Ecomodel si rivoluziona il modo di gestire gli immobili.
            li Ecomodel è pensato per gestire 
              u tutte le tipologie di immobili 
              | siano essi 
              u commerciali, residenziali o industriali.
            li Con il 
              u modello tridimensionale 
              | si possono realizzare 
              u render dinamici 
              | per ogni soluzione progettuale.
            li Ecomodel utilizza 
              u Bimx 
              | come visualizzatore del modello.
            li Ecomodel è stato pensato anche per la 
              u realtà aumentata 
              | con un semplice Cardboard potrete 
              u navigare all’interno del progetto.
        .col.col-12.col-lg-6.order-2.order-lg-1
          Imagee(image="/img/screenshot-3.png" image-alt="About Ecomodel" additional-class="img-fluid d-block mx-auto fadeIn")
        .col.col-12.col-lg-1.order-3
</template>
<script>
import Imagee from '~/components/Imagee.vue'
export default {
  name: 'About',
  data() {
    return {}
  },
  components: {
    Imagee
  }
}
</script>
<style lang="scss" scoped>
.container-custom {
  max-width: 1560px;
  margin: 0 auto;
}
.col {
   @media only screen and (min-width:$md){
  padding: 0 2rem;
   }
}
.about {
  &__list {
    list-style-type: none;
    margin-top: 2rem;
    text-align: justify;
    font-size: 1.1rem;
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
      u {
        // color: $primary;
        font-weight: 700;
        text-decoration: none;
        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>