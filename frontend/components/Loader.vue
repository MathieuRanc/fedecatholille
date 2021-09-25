<template>
  <img src="../assets/loader.svg" alt="loader" />
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
img {
  margin: auto;
  max-height: 50px;
  max-width: 50px;
  object-fit: contain;
  animation: 1s loading linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
