<template>
  <div class="container event" v-if="event">
    <a @click="$router.back()">⟵ Retour</a>
    <h1>
      {{ titre[0] }} <span>{{ titre[1] }}</span>
    </h1>
    <img :src="event.acf.image" alt="image d'event" />
    <span v-html="event.acf.contenu" />
  </div>
  <div v-else>
    {{ events }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.event.acf.titre,
    }
  },
  data() {
    return {
      event: this.$store.state.evenements.find(
        (event) => event.id === parseInt(this.$route.params.id)
      ),
    }
  },
  computed: {
    titre() {
      var split_title = this.event.acf.titre.split(' ')
      const fin = split_title.pop()
      const debut = split_title.join(' ')
      return [debut, fin]
    },
  },
   beforeMount() {
     this.$fetch()
   },fetchOnServer: false,
  async fetch() {
    const events = await fetch(
      process.env.urlAPI + '/events?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setArticles', events)
    this.event = this.$store.state.evenements.find(
      (event) => event.id === parseInt(this.$route.params.id)
    )
  },
}
</script>

<style lang="scss">
.event {
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
    max-height: 400px;
    max-width: 400px;
    -webkit-filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.25));
    border-radius: 4px;
    max-width: 100%;
    @media screen and (max-width: 750px) {
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
