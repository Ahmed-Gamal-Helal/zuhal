<template>
  <v-app>
    <v-app-bar
      v-on-scroll="handleScroll"
      :class="{ 'header--active': routeChange }"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-container class="d-inherit">
        <template class="navbar">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            class="text-md-center hidden-md-and-down"
          >
            <v-list-item-title class="navbar-link" @click="onScrollTo(item)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
          <v-spacer />
          <v-list-item>
            <v-btn class="lang-change" large @click="changeLocale">
              <i class="icon-lang"></i>
              <span class="mx-2">{{ handleLang }}</span>
            </v-btn>
          </v-list-item>
        </template>

        <v-spacer />
        <v-btn
          class="hidden-md-and-up"
          icon
          @click.stop="rightDrawer = !rightDrawer"
        >
          <v-icon right>mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="Direction"
      temporary
      fixed
    >
      <v-list>
        <BaseNavBar @handle-click="handleClick" />
      </v-list>
    </v-navigation-drawer>

    <Footer />
  </v-app>
</template>

<script>
import cookie from 'js-cookie'
import Footer from '@/components/footer'

export default {
  components: {
    Footer,
    BaseNavBar: () => import('@/components/BaseNavBar')
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      routeChange: false,
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
    Direction() {
      if (cookie.get('locale') === 'en') {
        return true
      } else {
        return false
      }
    },
    handleLang() {
      if (cookie.get('locale') === 'en') {
        return 'ar'
      } else {
        return 'en'
      }
    }
  },
  watch: {
    $route: {
      handler(route) {
        if (route.name !== 'index') {
          this.routeChange = true
        } else {
          this.routeChange = false
        }
      },
      immediate: true
    }
  },
  created() {
    if (cookie.get('locale') === 'en') {
      this.$vuetify.rtl = false
    } else {
      this.$vuetify.rtl = true
    }
  },
  methods: {
    handleClick() {
      this.rightDrawer = !this.rightDrawer
    },
    onScrollTo(item) {
      this.$router.push(item.to)
      this.scrollOnHomePage(item)
    },
    scrollOnHomePage(item) {
      if (!this.routeChange) {
        this.$scrollTo(item.target)
      } else {
        setTimeout(() => {
          if (item.target !== '') {
            this.$scrollTo(item.target)
          }
        }, 1000)
      }
    },
    changeLocale() {
      if (cookie.get('locale') === 'en') {
        cookie.set('locale', 'ar')
      } else {
        cookie.set('locale', 'en')
      }
      window.location.reload()
    },
    handleScroll(event, el) {
      if (window.scrollY >= 80) {
        el.classList.add('header--active')
        this.activeMode = true
      } else if (window.innerWidth <= 784) {
        el.classList.add('header--active')
      } else {
        el.classList.remove('header--active')
        this.activeMode = false
      }
    }
  }
}
</script>

<style>
.v-toolbar__content {
  margin: 0 auto;
}
.navbar-link {
  text-decoration: none;
  margin: 0 auto !important;
}
</style>
