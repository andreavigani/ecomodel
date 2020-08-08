<template lang="pug">
div
  FormulateForm(v-if="!isSubmitted" @submit="handleSubmit" v-model="formData" id="contact-form" name="contact-form" method="post" netlify data-netlify-honeypot="bot-field")
    FormulateInput(type="hidden" name="form-name")
    FormulateInput(type="text" name="nome" placeholder="Nome" validation="required")
    FormulateInput(type="text" name="azienda" placeholder="Azienda")
    FormulateInput(type="email" name="email" placeholder="Email" validation="required|email")
    FormulateInput(type="tel" name="telefono" placeholder="Telefono" validation="required|number")
    FormulateInput(:options="{su_richiesta: 'Su richiesta', pacchetto_base: 'Pacchetto Base', pacchetto_gold: 'Pacchetto Gold'}"
      type="select"
      name="pacchetto"
      placeholder="Seleziona un pacchetto"
      label="A quale pacchetto sei interessato?")
    FormulateInput(type="textarea" name="messaggio" placeholder="Messaggio" input-class="form-control" validation="required")
    //- FormulateInput(type="checkbox" name="termini" element-class="checkbox" input-class="checkbox" validation="accepted")
    //-   template(#label)
    //-     span.ml-2 Accetto il trattamento dei miei dati personali -
    //-       a(target="_blank" class="ml-1" href="/privacy-policy") Privacy Policy
    FormulateInput(type="checkbox" name="condizioni" wrapper-class="d-flex" element-class="form-check" input-class="form-check-input mr-2" label="Accetto il trattamento dei dati personali." validation="accepted")
    FormulateInput(type="submit" name="Invia richiesta" :disabled="isSubmitting" input-class="btn mt-2 btn-primary btn-block text-white-important")
  .notifications.mt-4
    .alert.alert-success(v-if="isSubmitted") Grazie per averci contattato! Ti risponderemo il prima possibile.
    .btn.btn-outline-primary(v-if="isSubmitted" @click="isSubmitted = false") Nuova richiesta
    .alert.alert-danger(v-if="isNotSubmitted")
      span Si è verificato un errore. Controlla il form e riprova.
      br
      span
        | Altrimenti, chiamaci allo
        a.ml-1(href="tel:+39043428234") 0434 28234
        | Grazie.
</template>
<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        'form-name': 'contact-form'
      },
      isSubmitting: false,
      isSubmitted: false,
      isNotSubmitted: false
    }
  },
  methods: {
    handleSubmit () {
      this.isSubmitting = true
      this.isSubmitted = false
      this.isNotSubmitted = false
      const params = new URLSearchParams()
      for (const key of Object.keys(this.formData)) {
        params.append(key, this.formData[key])
      }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      })
        .then(() => {
          this.isSubmitted = true
          this.formData = { 'form-name': 'contact-form' }
        })
        .catch(() => { this.isNotSubmitted = true })
      this.isSubmitting = false
    }
  }
}
</script>

<style lang="scss">
.form-control {
  border: 2px solid $primary;
  border: 1;
  box-shadow: none;
  letter-spacing: 1px;
  box-shadow: none!important;
  height: auto;
  padding: .5rem .75rem;
  color: $black!important;
  &:focus {
    border-color: $secondary;
  }
}
ul {
  padding: 0;
  &.help {
    font-size: .9rem;
    list-style-type: none;
    margin: 0;
  }
}
</style>
