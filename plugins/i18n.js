import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cookie from 'js-cookie'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: cookie.get('locale') || 'ar',
    fallbackLocale: 'ar',
    messages: {
      en: require('@/lang/en.json'),
      ar: require('@/lang/ar.json')
    }
  })
  if (process.client) {
    if (!cookie.get('locale')) {
      cookie.set('locale', 'ar')
    }
    if (cookie.get('locale') === 'en') {
      // add english font
      require('@/assets/fonts/en/stylesheet.css')
    }
  }
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
