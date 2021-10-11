<template>
  <div class="container">
    <h2><span>Actualités</span></h2>
    <div class="galerie">
      <CardArticle
        v-for="i in nbArticles"
        :key="i"
        :article="$store.state.articles[i - 1]"
      />
    </div>
    <button
      v-if="nbArticles !== $store.state.articles.length"
      @click="increaseLength"
    >
      Charger plus d'articles
    </button>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Actualités',
  },
  data() {
    return {
      nbArticles:
        this.$store.state.articles.length <= 6
          ? this.$store.state.articles.length
          : 6,
    }
  },
  methods: {
    increaseLength() {
      if (this.nbArticles + 6 <= this.$store.state.articles.length) {
        this.nbArticles += 6
      } else {
        this.nbArticles = this.$store.state.articles.length
      }
    },
  },
   beforeMount() {
     this.$fetch()
   },fetchOnServer: false,
  async fetch() {
    const articles = await fetch(
      process.env.urlAPI + '/actualites?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setArticles', articles)
    this.nbArticles =
      this.$store.state.articles.length <= 6
        ? this.$store.state.articles.length
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 750px) {
    grid-gap: 20px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
