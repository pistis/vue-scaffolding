import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en-US.json'

Vue.use(VueI18n)

const messages = {
  'en-US': en
}
export default new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages
})
