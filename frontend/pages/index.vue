<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>
          Fédération des Etudiants<br />
          <span>de l’Université Catholique</span><br />
          de Lille
        </h1>
        <img src="../assets/logo.svg" alt="fédé la catho" />
      </div>
    </div>
    <div class="assos">
      <h2>
        36 700 Étudiants, 25 écoles et facultés,
        <span
          >{{ $store.state.associations.length }} Associations : une
          Fédération</span
        >
      </h2>
      <GalerieLogo />
      <nuxt-link to="/annuaire">Trouver une association ⟶</nuxt-link>
    </div>
    <div class="actualites">
      <h2><span>Actualités</span></h2>
      <div class="galerie">
        <CardArticle
          v-for="article in $store.state.articles.slice(0, 6)"
          :key="article.id"
          :article="article"
        />
      </div>
      <nuxt-link to="/actualites">Voir tous les articles ⟶</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.$fetch()
  // },
  async fetch() {
    const articles = await fetch(
      process.env.urlAPI + '/actualites?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setArticles', articles)
    this.nbArticles = articles.length <= 6 ? articles.length : 6

    const associations = await fetch(
      process.env.urlAPI + '/associations?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setAssociations', associations)
  },
}
</script>

<style lang="scss" scoped>
.hero {
  height: 500px;
  background-image: linear-gradient(140deg, #f9f9f9 0%, #c6cbea 100%);
  // -webkit-filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.5));
  // filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.5));
  box-shadow: -4px 4px 10px #5a62a388;
  padding: auto 80px;
  .container {
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1500px;
  }
  img {
    height: 300px;
    -webkit-filter: drop-shadow(-10px 10px 20px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.5));
    // box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 1000px) {
    height: 500px;
    padding: 120px 36px;
    h1 {
      font-size: 44px;
      @media screen and (max-width: 750px) {
        font-size: 30px;
      }
    }
    img {
      max-width: 300px;
    }
  }
  @media screen and (max-width: 600px) {
    // height: 400px;
    height: auto;
    padding: 0;
    .container {
      flex-direction: column-reverse;
      img {
        height: 180px;
      }
      h1 {
        text-align: center;
        margin-top: 20px;
        font-size: 26px;
      }
    }
  }
}
h2 {
  font-size: 26px;
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  font-weight: 500;
  span {
    color: var(--main);
  }
}
.assos {
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 120px 80px;
  @media screen and (max-width: 1000px) {
    padding: 120px 40px;
  }
  @media screen and (max-width: 600px) {
    padding: 40px 20px;
  }
  a {
    align-self: flex-end;
  }
}
.actualites {
  display: flex;
  flex-direction: column;
  padding: 0 80px 120px 80px;
  @media screen and (max-width: 1000px) {
    padding: 0 40px 120px 40px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px 120px 20px;
  }
  padding-top: 0;
  h2 {
    text-align: center;
  }
  button,
  input[type='submit'] {
    margin: 20px auto;
  }
  a {
    align-self: flex-end;
  }
}
.galerie {
  margin: 40px auto 0 auto;
  width: 100%;
  max-width: 1500px;
  display: grid;
  grid-gap: 50px;
  grid-column-gap: 100px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
