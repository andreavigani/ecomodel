<template lang="pug">
  section#faq.faq.bg-light
    .container
      h2 FAQ: domande e risposte
      .faq__list
        .faq__list__item(v-for="(faq, index) in faqs" :key="index")
          h5 {{ faq.q }}
          p {{ faq.a }}
</template>
<script>
export default {
  name: 'Faq',
  data() {
    return {
faqs: [{q: 'A chi è rivolto il servizio ecomodel?',
a: 'Il servizio Ecomdel è rivolto a tutti le persone che cercano una maniera evoluta e allo stesso tempo pratica di gestire tutte le tipologie di immobili risparmiando tempo e fatica.'},{

q: 'In che modo è agevolato il lavoro del manutentore?',
a: 'Il manutentore, installando l’applicazione puo’ controllare in tempo reale la parte di edificio dove deve andare ad intervenire, tutte le informazioni di cui ha bisogno saranno a portata di click.'},{

q: 'Come posso utilizzare ecomodel per superbonus110%?',
a: 'Inserendo nel modello le caratteristiche  dell’involucro e della caldaia posso realizzare un modello tridimnesionale e verificare la possibilità di realizzare uno o più degli interventi previsti.'},{

q: 'Ecomodel mi fornisce l’APE?',
a: 'Ecomodel non è un software per il calcolo dell’APE, ma il servizio (utilizzando altri software certificati permette di ottenere gli attestati di prestazione energetica ante e post intervento. È possibile inoltre fare delle simulazioni in corso d’opera modificando i vari parametri'},{

q: 'Quindi posso avere l’APE anche senza eco-model?',
a: 'Si l’APE puo’ essere consegnata anche come documento separato'},{

q: 'Posso inserire i dati fatti da differenti progettisti o tecnici?',
a: 'Ecomodel può contenere tutti i dati redatti da diversi professionisti, il gestore o l’utilizzatore del modello può inviare o stampare tutti i documenti visionati in formato pdf.'},{

q: 'Il modello è aggiornabile?',
a: 'IIl modello è aggiornabile in qualsiasi momento, diverse soluzioni sono previste nei pacchetti di abbonamento.'},{

q: 'Quali dati posso inserire?',
a: 'Si possono rendere editabili tutti gli oggetti presenti nel modello, devono essere però valutate tutte le informazioni da aggiungere per non rendere il file troppo pesante.'},{

q: 'Possono essere importati file ifc?',
a: 'Si, possono essere importati ma non direttamente nel modello, i dati forniti dal progettista vengono rielaborati e tradotti per rendere il modello condivisibile e meglio gestibile.'},{

q: 'Possono essere esportare i file in dwg?',
a: 'Ecomodel riesce a esportare il file in pdf , ma il modello tridimensionale originale può essere esportato in pin, dwf, dxf, dwg, ifc, ifc xml e puo’ esportare file in xls'},{

q: 'In che formato devo importare i file?',
a: 'Dopo l’incontro iniziale con il responsabile della gestione, e stabilite il tipo di informazioni da inserire nel modello, a tutti i progettisti viene fornita una chek-list che individua formato e risoluzione dei file da trasmettere.'},{

q: 'Si possono inserire anche Video?',
a: 'Si possono essere inseriti anche dei video, si dovrà ancora una volta valutare la maniera più efficiente di inserimento'},{

q: 'Quanto dura l’abbonamento?',
a: 'Ecomodel è un servizio con rinnovo annuale, almeno 2 settimane prima della scadenza dell’abbonamento il titolare del servizio dovrà comunica via pec l’intenzione di non avvalersi più dello stesso.'},{

q: 'Posso realizzare render animati?',
a: 'I render animati possono essere caricati su piattaforme di visualizzazione specifiche (YouTube, Vimeo) o esportati come file video. La prima opzione è quella consigliata perché la condivisione è più semplice.'},{

q: 'Posso inserire l’informazione anche sulla singola unità immobiliare?',
a: 'Certamente , se il Sig.Rossi decide di cambiare  i serramenti o cambiamo le partizioni interne il modello puo’ essere aggiornato.'},{

q: 'Posso esportare quantità dal modello?',
a: 'Si possono essere quantificate tutte le informazioni immesse nel modello, tali informazioni devono essere stabilite prima della realizzazione del modello.'}]
    }
  }
}


</script>
<style lang="scss" scoped>
.faq__list {
  &__item {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba($black, .25);
    p {
      margin: 0;
    }
    opacity: .7;
    &:hover {
      opacity: 1;
    }
  }
}
</style>