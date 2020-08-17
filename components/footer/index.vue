<template>
  <footer class="footer mt-5">
    <v-container>
      <v-row class="mt-12 mb-4 text-center">
        <v-col cols="12">
          <ul class="footer__list">
            <template v-for="(item, index) in items">
              <li :key="index" class="footer__list-item">
                <router-link
                  v-scroll-to="{ el: item.target }"
                  :to="item.to"
                  class="navbar-link"
                >
                  <span class="footer__link--text">{{ item.title }}</span>
                </router-link>
              </li>
            </template>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: this.$t('navbar.features'),
          target: '#home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: this.$t('navbar.need_more'),
          target: '#need-more',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: this.$t('navbar.why_salezagee'),
          target: '#why-salezagee',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: this.$t('navbar.contact_us'),
          target: '#contact-us',
          to: '/'
        }
      ]
    }
  },

  computed: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
