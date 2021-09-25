<template>
  <div id="App">
    <div>
      <Navbar />
      <transition name="page" mode="out-in">
        <Nuxt />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  transition: 'default',
  fetchOnServer: false,
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
html,
textarea {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
#App {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
h1 {
  font-size: 44px;
  @media screen and (max-width: 750px) {
    font-size: 30px;
  }
  margin-bottom: 30px;
  span {
    color: var(--main);
  }
}
h2 {
  color: var(--main);
  font-weight: 400;
}
img {
  max-height: 100%;
}
form {
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 10px;
  padding: 40px;
  @media screen and (max-width: 750px) {
    padding: 20px;
  }
  input:not([type='file']),
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: solid 2px transparent;
    border-radius: 4px;
    padding: 16px 20px;
    outline: none;
    &,
    &::placeholder {
      font-size: 16px;
      @media screen and (max-width: 750px) {
        font-size: 12px;
      }
    }
  }
  textarea {
    resize: vertical;
  }
  label {
    margin: 30px 0 10px 0;
    @media screen and (max-width: 750px) {
      margin: 10px 0;
    }
  }
  label:not([for^='image']) {
    font-weight: 400;
    font-size: 20px;
    @media screen and (max-width: 750px) {
      font-size: 12px;
    }
  }
  label[for^='image'] {
    color: black;
    background-color: white;
    cursor: pointer;
    padding: 10px 16px;
    margin-left: 10px;
  }
  input[type='file'] {
    position: absolute;
    transform: translateX(-99999px);
  }
  div {
    color: gray;
  }
  button,
  input[type='submit'] {
    margin: 40px auto 0 auto;
  }
  input[type='submit'] {
    border-radius: 100px;
    padding: 16px 44px;
    @media screen and (max-width: 750px) {
      padding: 16px 24px;
    }
  }
  .file {
    display: flex;
    position: relative;
    font-size: 16px;
    @media screen and (max-width: 750px) {
      font-size: 12px;
    }
    margin-bottom: 20px;
    label {
      cursor: pointer;
      font-size: 16px;
      @media screen and (max-width: 750px) {
        font-size: 12px;
      }
      color: black;
      padding: 10px;
      background-color: white;
      margin-left: 10px;
      transition: box-shadow 200ms;
      border: 2px solid transparent;
      &:hover {
        box-shadow: 0 4px 10px rgba(128, 128, 128, 0.3);
      }
      &.invalid {
        border-color: rgb(255, 128, 128);
      }
    }
  }
  .validator {
    color: red;
    font-size: 16px;
    @media screen and (max-width: 750px) {
      font-size: 12px;
    }
    margin-bottom: 6px;
  }
  .transparent {
    color: transparent;
  }
  .sended {
    margin-top: 10px;
    .success {
      color: green;
    }
    .danger {
      color: red;
    }
  }
  textarea,
  input[type='text'],
  input[type='email'],
  input[type='tel'] {
    border: 2px solid transparent;
    &.invalid {
      border-color: rgb(255, 128, 128);
    }
  }
}
a {
  color: var(--main);
  text-decoration: none;
  transition: color 200ms;
  &:hover {
    color: var(--main-dark);
  }
}
button,
input[type='submit'] {
  position: relative;
  cursor: pointer;
  font-size: 16px;
  padding: 16px 44px;
  @media screen and (max-width: 750px) {
    padding: 16px;
    font-size: 12px;
  }
  border: solid 2px transparent;
  border-radius: 100px;
  background-color: var(--main);
  color: white;
  transition: background-color 100ms;
  &:hover {
    background-color: var(--main-dark);
  }
  &.link {
    height: 50px;
    padding: 0;
    a {
      color: white;
      padding: 16px 44px;
      border-radius: 100px;
    }
  }
}
.green {
  h1 span,
  h2 {
    color: var(--agorae);
  }
  button,
  input[type='submit'] {
    background-color: var(--agorae);
    &:hover {
      background-color: var(--agorae-dark);
    }
  }
}
.container {
  max-width: 1500px;
  margin: 0 auto;
  font-size: 20px;
  padding: 80px;
  @media screen and (max-width: 1000px) {
    padding: 40px;
  }
  h2 {
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 24px;
  }
  button,
  input[type='submit'] {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 750px) {
    font-size: 12px;
    padding: 20px;
    input[type='submit'] {
      margin-bottom: 0;
    }
  }
}
.page {
  @media screen and (max-width: 750px) {
    h1 {
      margin-bottom: 10px;
    }
    h2 {
      margin: 10px 0 0 0;
    }
  }
  margin-bottom: 30px;
  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
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
    @media screen and (max-width: 750px) {
      float: unset;
      margin: 0;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  p {
    // text-align: justify;
    margin: 24px 0;
    line-height: 33px;
    // @media screen and (max-width: 750px) {
    // 	line-height: 20px;
    // }
    font-size: 24px;
    @media screen and (max-width: 1000px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media screen and (max-width: 750px) {
      margin: 10px 0;
      font-size: 14px;
      line-height: 20px;
    }
  }
  button,
  input[type='submit'] {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: solid 2px transparent;
  -webkit-text-fill-color: black;
  box-shadow: 0 0 0 1000px white inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
