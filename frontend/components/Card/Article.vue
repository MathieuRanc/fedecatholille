<template>
  <NuxtLink :to="to" tag="div" class="card">
    <img :src="article.acf.image" alt="image article" />
    <h3>{{ article.acf.titre }}</h3>
    <p>{{ article.acf.small_description }}</p>
    <NuxtLink :to="to">En savoir plus ⟶</NuxtLink>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: {
        id: 1,
        acf: {
          titre: 'Article test',
          image: require('~/assets/article-default.svg'),
          title: 'Title',
          small_description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi distinctio, earum officiis amet commodi ut dolor et deserunt eius, iste ea quis id veritatis aliquid mollitia neque nemo illo ullam.',
        },
      },
    },
    type: { type: String, default: 'article' },
  },
  computed: {
    to() {
      return `/${this.type}/${this.article.id}`
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  img {
    width: 100%;
    margin: auto 0;
  }
}
img {
  -webkit-filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2));
  aspect-ratio: 4/3;
  max-height: 300px;
  object-fit: contain;
  // height: calc(100vw / 5 - 260px);
  // @media screen and (max-width: 2000px) {
  // 	height: calc(100vw / 5 - 200px);
  // }
  // @media screen and (max-width: 1500px) {
  // 	height: calc(100vw / 5);
  // }
  // @media screen and (max-width: 1300px) {
  // 	height: calc(100vw / 4);
  // }
  // @media screen and (max-width: 1000px) {
  // 	height: calc(100vw / 3 - 50px);
  // }
  // @media screen and (max-width: 800px) {
  // 	height: calc(100vw / 2);
  // }
}
h3 {
  border-radius: 10px;
  margin: 24px 0 10px 0;
  font-size: 24px;
  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
  color: #000000;
  font-weight: 500;
}
p {
  color: #888888;
}
p,
a {
  font-size: 16px;
  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
}
</style>
