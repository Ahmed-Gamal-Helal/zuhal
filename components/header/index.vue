<template>
  <main id="home" class="header-container">
    <v-container>
      <div class="header-container__main-header">
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <section class="header-container__info">
              <h1 class="header-container__main-header--title">
                {{ $t('data.header_intro') }}
              </h1>
              <v-btn primary>{{ $t('button.start_free_trial') }}</v-btn>
            </section>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </main>
</template>

<script>
export default {
  name: 'Header'
}
</script>
