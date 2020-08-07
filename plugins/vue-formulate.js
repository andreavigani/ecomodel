import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import { it } from '@braid/vue-formulate-i18n'

const options = {
  plugins: [it],
  locale: 'it',
  classes: {
    outer: 'control',
    wrapper: 'field mt-4',
    element: 'form-group',
    input: 'form-control',
    error: 'help text-danger',
    errors: 'help text-danger',
    inputIsValid: 'text-success',
    inputHasErrors: 'text-danger'
  }
}

Vue.use(VueFormulate, options)
