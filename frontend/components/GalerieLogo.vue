<template>
  <!-- <div class="auto-scroll" v-dragscroll :style="cssVars"> -->
  <div class="auto-scroll" :style="cssVars">
    <div :class="row">
      <img
        v-for="i in logos.length * 3"
        :key="i"
        :src="logos[i % logos.length]"
        alt=""
      />
    </div>
    <div :class="row">
      <img
        v-for="i in logos.length * 3"
        :key="i"
        :src="logos[(i + 2) % logos.length]"
        alt=""
      />
    </div>
    <div :class="row">
      <img
        v-for="i in logos.length * 3"
        :key="i"
        :src="logos[(i + 4) % logos.length]"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: this.$store.state.associations.map(
        (association) => association.acf.logo
      ),
      row: '',
    }
  },
  computed: {
    cssVars() {
      const length = this.logos.length
      if (this.$store.state.associations.length != 0) {
        this.row = 'row'
      }
      return {
        '--animationDelay': this.$store.state.associations.length * 2 + 's',
        '--translateLength': this.$store.state.associations.length,
      }
    },
  },
  async fetch() {
    const associations = await fetch(
      process.env.urlAPI + '/associations?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setAssociations', associations)
    this.logos = this.$store.state.associations.map((x) => x.acf.logo)
  },
}
</script>

<style lang="scss" scoped>
$logos: 8;
.auto-scroll {
  width: 100vw;
  margin: 0;
  position: relative;
  left: calc((1500px - 100vw) / 2 - 80px);
  @media screen and (max-width: 1500px) {
    left: -80px;
  }
  @media screen and (max-width: 1000px) {
    left: -40px;
  }
  @media screen and (max-width: 600px) {
    left: -20px;
  }
  flex-direction: column;
  overflow: scroll;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .row {
    transform: translateX(calc(-120px * var(--translateLength)));
    animation: var(--animationDelay) scrollAnimation linear infinite;
    @media screen and (max-width: 600px) {
      animation: var(--animationDelay) scrollAnimation2 linear infinite;
    }
    display: flex;
    flex-direction: row;
  }
}
img {
  margin: 50px;
  width: 80px;
  max-height: 100px;
  object-fit: contain;
  @media screen and (max-width: 600px) {
    margin: 20px;
  }
}
@keyframes scrollAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-180px * var(--translateLength)));
  }
}
@keyframes scrollAnimation2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-120px * var(--translateLength)));
  }
}
</style>
