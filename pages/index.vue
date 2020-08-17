<template>
  <main>
    <Header class="pb-md-12" />
  </main>
</template>

<script>
import cookie from 'js-cookie'

export default {
  components: {
    Header: () => import('@/components/header')
  },

  methods: {
    handleDirection() {
      if (cookie.get('locale') === 'en') {
        cookie.set('locale', 'ar')
      } else {
        cookie.set('locale', 'en')
      }
      window.location.reload()
    }
  }
}
</script>
