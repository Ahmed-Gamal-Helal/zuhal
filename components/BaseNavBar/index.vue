<template>
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :class="classNames"
    >
      <router-link
        v-scroll-to="{ el: item.target }"
        :to="item.to"
        class="navbar-link"
      >
        <v-list-item-title @click="$emit('handle-click')">{{
          item.title
        }}</v-list-item-title></router-link
      >
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'BaseNavBar',
  props: {
    classNames: {
      type: String,
      default: ''
    }
  },
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
  }
}
</script>
