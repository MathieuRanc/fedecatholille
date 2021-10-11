<template>
  <div class="container page green" v-if="page">
    <span v-html="page.content" />
    <h2>Nos partenaires</h2>
    <div id="partenaires" class="galerie">
      <CardPartenaire
        v-for="partenaire in $store.state.partenairesAgorae"
        :key="partenaire.id"
        :partenaire="partenaire"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head: {
    title: 'Agorae',
  },
  computed: mapState({
    page(state) {
      return state.pages.find((page) => page.slug === 'agorae')
    },
  }),
   beforeMount() {
     this.$fetch()
   },fetchOnServer: false,
  async fetch() {
    const pages = await fetch(
      process.env.urlPages + '/pages?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setPages', pages)

    const partenairesAgorae = await fetch(
      process.env.urlAPI + '/partenaires_agorae?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setPartenairesAgorae', partenairesAgorae)
  },
}
</script>

<style>
@media screen and (max-width: 470px) {
  .green h1 {
    font-size: 28px;
  }
}
</style>

<style lang="scss" scoped>
.galerie {
  margin: 20px auto 40px auto;
  width: 100%;
  max-width: 1500px;
  display: grid;
  grid-gap: 70px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 500px) {
    grid-gap: 30px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
