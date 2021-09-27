<template>
  <div class="container page" v-if="page" v-html="page.content" />
</template>

<script>
import { mapState } from 'vuex' 
export default {
  head() {
    return {
      title: this.page.title,
    }
  },
  computed: mapState({
    page(state) {
      return state.pages.find((page) => page.slug === this.$route.params.slug)
    },
  }),
  // mounted() {
  //   this.$fetch()
  // },
  async fetch() {
    const pages = await fetch(
      process.env.urlPages + '/pages?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setPages', pages)
  },
}
</script>
