<template>
  <div class="container">
    <h1>Nos <span>partenaires</span></h1>
    <div class="galerie">
      <CardPartenaire
        v-for="partenaire in $store.state.partenaires"
        :key="partenaire.id"
        :partenaire="partenaire"
      />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nos partenaires',
    }
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

<style lang="scss" scoped>
.galerie {
  margin: 20px auto 40px auto;
  width: 100%;
  max-width: 1500px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  // @media screen and (max-width: 500px) {
  // 	grid-template-columns: repeat(1, minmax(0, 1fr));
  // }
  grid-gap: 70px;
}
</style>
