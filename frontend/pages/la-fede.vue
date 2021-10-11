<template>
  <div>
    <span class="page" v-if="page" v-html="page.content"></span>
    <video
      v-if="page && page.video"
      :src="page.video"
      autoplay
      muted
      loop
    ></video>
    <div class="container">
      <h1 id="notre-equipe">Notre <span>équipe</span></h1>
      <div v-for="(pole, i) in poles" :key="i">
        <h2>{{ pole }}</h2>
        <div class="galerie">
          <CardEquipe
            v-for="membre in $store.state.equipe.filter(
              (membre) => membre.acf.pole === pole
            )"
            :key="membre.id"
            :membre="membre"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Qui sommes nous ?',
  },
  computed: {
    page() {
      return this.$store.state.pages.find((page) => page.slug === 'la-fede')
    },
    poles() {
      return [
        ...new Set(this.$store.state.equipe.map((membre) => membre.acf.pole)),
      ].sort()
    },
  },
   beforeMount() {
     this.$fetch()
   },fetchOnServer: false,
  async fetch() {
    const pages = await fetch(
      process.env.urlPages + '/pages?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setPages', pages)

    const equipe = await fetch(
      process.env.urlAPI + '/equipe?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setEquipe', equipe)
  },
}
</script>

<style lang="scss" scoped>
video {
  margin-top: -40px;
  width: 100vw;
}
.galerie {
  margin: 20px auto 40px auto;
  width: 100%;
  max-width: 1500px;
  display: grid;
  column-gap: 40px;
  row-gap: 10px;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 500px) {
    grid-gap: 10px 30px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
