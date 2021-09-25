<template>
  <div class="container">
    <h1>Représentation <span>étudiante</span></h1>
    <div class="galerie" v-if="$store.state.representationsEtudiantes">
      <CardRepresentationEtudiante
        v-for="(representationEtudiante, i) in $store.state
          .representationsEtudiantes"
        :key="i"
        :representationEtudiante="representationEtudiante"
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Donnez votre avis',
  },
  mounted() {
    this.$fetch()
  },
  async fetch() {
    const representationEtudiante = await fetch(
      process.env.urlAPI + '/rep_etudiante?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setRepresentationsEtudiantes', representationEtudiante)
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
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  grid-gap: 70px;
}
</style>
