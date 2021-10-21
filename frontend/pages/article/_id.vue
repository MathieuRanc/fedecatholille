<template>
  <div class="container article" v-if="article">
    <a @click="$router.back()">⟵ Retour</a>
    <nuxt-child />
    <h1>
      {{ titre[0] }} <span>{{ titre[1] }}</span>
    </h1>
    <img :src="article.acf.image" alt="image d'article" />
    <span v-html="article.acf.contenu" />
  </div>
  <div v-else>
    {{ articles }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.acf.titre,
    }
  },
  computed: {
    article() {
      return this.$store.state.articles.find(
        (article) => article.id === parseInt(this.$route.params.id)
      )
    },
    titre() {
      var split_title = this.article.acf.titre.split(' ')
      const fin = split_title.pop()
      const debut = split_title.join(' ')
      return [debut, fin]
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
  },
}
</script>

<style lang="scss">
.article {
  font-size: 20px;
  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
  a {
    cursor: pointer;
  }
  img {
    float: right;
    margin-left: 40px;
    margin-bottom: 30px;
    max-height: 500px;
    // min-width: 66%;
    max-width: 400px;
    -webkit-filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.25));
    border-radius: 4px;
    object-fit: contain;
    @media screen and (max-width: 750px) {
      max-width: 100%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      float: unset;
      margin: 0;
    }
  }
  p {
    text-align: justify;
    margin: 24px 0;
    line-height: 20px;
    font-size: 18px;
    @media screen and (max-width: 750px) {
      font-size: 12px;
    }
  }
  .container {
    margin-bottom: 30px;
  }
}
</style>
