<template lang="pug">
  section#pricing.text-center(v-scroll-reveal)
    .container
      h2 Prezzi
      p 
        span Ecomodel offre diverse di soluzioni per la gestione dell’edificio.
        span Il preventivo per la realizzazione del modello iniziale viene fatto su misura, perché dipende dalla tipologia dell’edificio e dalla quantità di informazioni che in esso vogliono essere gestite.
        span Una volta realizzato il modello iniziale sono disponibili pacchetti personalizzati per la gestione degli immobili.
      .prices
        .prices__item
          div
            h4.prices__item__title Su richiesta
            .prices__item__description Prevede un costo orario per l’aggiornamento del modello, verrà fatto un preventivo prima di iniziare il lavoro.
          div
            .prices__item__price 35€/h
            a.prices__item__btn.btn.btn-outline-primary.mb-4(href='#' v-scroll-to="'#contact'") Contattaci
        .prices__item
          div
            h4.prices__item__title Pacchetto Base
            .prices__item__description Prevede un aggiornamento del modello mensile di 8 ore.
          div
            .prices__item__price 200€/mese
            a.prices__item__btn.btn.btn-outline-primary.mb-4(href='#' v-scroll-to="'#contact'") Contattaci
        .prices__item
          div
            h4.prices__item__title Pacchetto Gold
            .prices__item__description Prevede un abbonamento annuale per l’aggiornamento del modello, tutti gli interventi per la gestione del modello sono compresi.
          div
            .prices__item__price 1600€
            a.prices__item__btn.btn.btn-outline-primary.mb-4(href='#' v-scroll-to="'#contact'") Contattaci
</template>
<script>
export default {
  name: 'Pricing',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
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
      border-color: $secondary;
      .prices__item__title {
        background-color: $secondary;
      }
      .prices__item__price {
        color: $secondary;
      }
      .prices__item__btn {
        border-color: $secondary;
        color: $secondary;
      }
    }
    &__title {
      transition: all .5s;
      background-color: $primary;
      padding: 1.5rem 1rem;
      color: $white;
    }
    &__description {
      padding: 1.5rem 1rem;
    }
    &__price {
      transition: all .5s;
      color: $primary;
      font-weight: 700;
      font-size: 2rem;
      padding: 1.5rem;
    }
  }
}
</style>