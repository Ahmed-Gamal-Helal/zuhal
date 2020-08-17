<template>
  <v-app dark>
    <section class="erorr-container">
      <section class="img-wrap ratio-50 ">
        <div class="img-content">
          404
        </div>
      </section>
      <NuxtLink to="/">
        {{ $t('heading. go_back') }}
      </NuxtLink>
    </section>
  </v-app>
</template>

<script>
export default {
  layout: 'simple',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.erorr-container {
  height: 50vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
