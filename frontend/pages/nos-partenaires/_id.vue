<template>
  <div class="container asso" v-if="partenaire">
    <NuxtLink to="/nos-partenaires">⟵ Retour aux partenaires</NuxtLink>
    <h1>{{ partenaire.acf.nom }}</h1>
    <img :src="partenaire.acf.logo" alt="logo partenaire" />
    <span v-html="partenaire.acf.description" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.partenaire.acf.nom,
    }
  },
  computed: {
    partenaire() {
      return this.$store.state.partenaires.find(
        (partenaire) => partenaire.id === parseInt(this.$route.params.id)
      )
    },
  },
   beforeMount() {
     this.$fetch()
   },fetchOnServer: false,
  async fetch() {
    const partenaires = await fetch(
      process.env.urlAPI + '/partenaires?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setPartenaires', partenaires)
  },
}
</script>

<style lang="scss">
.asso {
  font-size: 20px;
  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
  img {
    float: right;
    margin-left: 40px;
    margin-bottom: 30px;
    max-height: 500px;
    min-width: 66%;
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
    line-height: 33px;
    @media screen and (max-width: 750px) {
      line-height: 20px;
    }
  }
  .container {
    margin-bottom: 30px;
  }
  .contact {
    margin: 40px 0;
  }
}
</style>
