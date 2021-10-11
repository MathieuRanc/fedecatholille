<template>
  <div class="container">
    <h2><span>Évènements</span></h2>
    <div class="galerie">
      <CardArticle
        v-for="i in nbArticles"
        :key="i"
        :article="$store.state.evenements[i - 1]"
        type="event"
      />
    </div>
    <button
      v-if="nbArticles !== $store.state.evenements.length"
      @click="increaseLength"
    >
      Charger plus d'events
    </button>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Évènements',
  },
  data() {
    return {
      nbArticles:
        this.$store.state.evenements.length <= 6
          ? this.$store.state.evenements.length
          : 6,
    }
  },
  methods: {
    increaseLength() {
      if (this.nbArticles + 6 <= this.events.length) {
        this.nbArticles += 6
      } else {
        this.nbArticles = this.$store.state.evenements.length
      }
    },
  },
   beforeMount() {
     this.$fetch()
   },fetchOnServer: false,
  async fetch() {
    const events = await fetch(
      process.env.urlAPI + '/events?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setEvenements', events)
    this.nbArticles =
      this.$store.state.evenements.length <= 6
        ? this.$store.state.evenements.length
        : 6
  },
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
button {
  margin: 20px auto;
}
.galerie {
  margin: 40px auto 0 auto;
  width: 100%;
  max-width: 1500px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 750px) {
    grid-gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
