<template>
  <div>
    <slot
      :attrs="{
        errorMessages: getServerErrors || activeErrorMessages,
        label: $t(`fields.${name}`)
      }"
      :listeners="{ blur: () => preferredValidator.$touch() }"
      :hasErrors="hasErrors"
    />
  </div>
</template>
<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor'
import { mapGetters } from 'vuex'
export default {
  extends: singleErrorExtractorMixin,

  computed: {
    ...mapGetters({
      serverErrors: 'errors/serverErrors'
    }),
    // getServerErrors() {
    //   if (this.$store.getters.getServerErrors) {
    //     return this.$store.getters.getServerErrors[this.name]
    //   } else {
    //     return null
    //   }
    // },
    getServerErrors() {
      if (
        this.serverErrors !== null &&
        this.serverErrors !== undefined &&
        this.serverErrors[this.name]
      ) {
        return this.serverErrors[this.name] || ''
      } else {
        return this.firstErrorMessage
      }
    }
  }
}
</script>
