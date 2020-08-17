import Vue from 'vue'
import Vuelidate from 'vuelidate'

import vuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'

import FormGroup from '@/components/FormGroup'

Vue.use(Vuelidate)

const messages = {
  en: require('@/lang/en.json'),
  ar: require('@/lang/ar.json')
}

Vue.use(vuelidateErrorExtractor, {
  messages,
  i18n: 'validation'
})

Vue.component('form-group', FormGroup)
Vue.component('formWrapper', templates.FormWrapper)
