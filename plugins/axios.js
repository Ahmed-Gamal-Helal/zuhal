import cookie from 'js-cookie'
export default ({ store, app: { $axios }, error, redirect }) => {
  $axios.onResponse((response) => {
    if (store.getters['errors/serverErrors'] !== null) {
      store.dispatch('errors/ClearServerErrors')
    }
    return response
  })

  $axios.onRequest((config) => {
    config.headers.common['X-locale'] = cookie.get('locale') || 'ar'
    config.headers.common.Timezone = `UTC +${-new Date().getTimezoneOffset() /
      60}`
  })

  $axios.onError((err) => {
    if (err.response && err.response.status === 404) {
      redirect('/404')
    }
    if (err.response && err.response.data && err.response.data.errors) {
      store.dispatch('errors/SetServerErrors', err.response.data.errors)
    }
  })
}
