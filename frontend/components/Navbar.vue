<template>
  <nav>
    <nuxt-link to="/" class="link-logo">
      <img class="logo" src="@/assets/logo.svg" alt="" />
    </nuxt-link>
    <label for="burger" class="mobile">
      <img src="../assets/burger.svg" alt="" />
    </label>
    <input v-model="burger" type="checkbox" name="burger" id="burger" />
    <div class="menu-burger">
      <label for="burger">×</label>
      <span>Fédé Lille</span>
      <NuxtLink to="/la-fede">Qui sommes nous ?</NuxtLink>
      <NuxtLink to="/la-fede#notre-equipe">Notre équipe</NuxtLink>
      <NuxtLink to="/notre-histoire">Notre histoire</NuxtLink>
      <NuxtLink to="/nos-partenaires">Nos partenaires</NuxtLink>
      <span>Vie étudiante</span>
      <NuxtLink to="/annuaire">Nos associations</NuxtLink>
      <NuxtLink to="/inscrire-son-asso">Inscrire son Asso</NuxtLink>
      <NuxtLink to="/actualites">Actualités</NuxtLink>
      <NuxtLink to="/donnez-votre-avis"
        >Donnez votre Avis</NuxtLink
      >
      <NuxtLink to="/vie-sportive-du-campus">Vie Sportive du campus</NuxtLink>
      <!-- <NuxtLink to="/biennale-ecoposs">Biennale EcoPoss</NuxtLink> -->
      <NuxtLink to="/international">International</NuxtLink>
      <span>Nos events</span>
      <NuxtLink to="/events">Nos events</NuxtLink>
      <!-- <NuxtLink to="/billetterie">Billetterie</NuxtLink> -->
      <span>Agoraé</span>
      <NuxtLink class="green" to="/agorae">C'est quoi l'Agoraé ?</NuxtLink>
      <NuxtLink class="green" to="/agorae#inscription"
        >Comment s'inscrire ?</NuxtLink
      >
      <NuxtLink class="green" to="/agorae#horaires">Nos horaires</NuxtLink>
      <NuxtLink class="green" to="/agorae#partenaires"
        >Nos partenaires</NuxtLink
      >
      <NuxtLink to="/contact" tag="button">Contact</NuxtLink>
    </div>
    <ul class="menu desktop">
      <li>
        <label for="">Fédé Lille</label>
        <img src="../assets/chevron-down.svg" alt="chevron" />
        <ul class="sub-menu">
          <li>
            <NuxtLink to="/la-fede">Qui sommes nous ?</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/la-fede#notre-equipe">Notre équipe</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/notre-histoire">Notre histoire</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/nos-partenaires">Nos partenaires</NuxtLink>
          </li>
        </ul>
      </li>
      <li>
        <label for="">Vie étudiante</label>
        <img src="../assets/chevron-down.svg" alt="chevron" />
        <ul class="sub-menu">
          <li>
            <NuxtLink to="/annuaire">Nos associations</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/inscrire-son-asso">Inscrire son Asso</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/actualites">Actualités</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/donnez-votre-avis"
              >Donnez votre Avis</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/vie-sportive-du-campus"
              >Vie Sportive du campus</NuxtLink
            >
          </li>
          <!-- <li>
						<NuxtLink to="/biennale-ecoposs"
							>Biennale EcoPoss</NuxtLink
						>
					</li> -->
          <li>
            <NuxtLink to="/international">International</NuxtLink>
          </li>
        </ul>
      </li>
      <li>
        <NuxtLink tag="label" class="pointer" to="/events">Nos events</NuxtLink>
        <!-- <label for="">Nos events</label>
				<img src="../assets/chevron-down.svg" alt="chevron" />
				<ul class="sub-menu">
					<li><NuxtLink to="/events">Nos events</NuxtLink></li>
					<li>
						<NuxtLink to="/billetterie">Billetterie</NuxtLink>
					</li>
				</ul> -->
      </li>
      <li>
        <label for="">Agoraé</label>
        <img src="../assets/chevron-down.svg" alt="chevron" />
        <ul class="sub-menu">
          <li>
            <NuxtLink class="green" to="/agorae"
              >C'est quoi l'Agoraé ?</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="green" to="/agorae#inscription"
              >Comment s'inscrire ?</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="green" to="/agorae#horaires"
              >Nos horaires</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="green" to="/agorae#partenaires"
              >Nos partenaires</NuxtLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <NuxtLink to="/contact" tag="button" class="desktop">Contact</NuxtLink>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      burger: false,
    }
  },
  watch: {
    $route() {
      this.burger = false
    },
  },
}
</script>

<style>
.bm-burger-button {
  position: fixed;
  z-index: 100;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}
</style>

<style lang="scss" scoped>
label[for='burger'] {
  text-align: left;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  img {
    width: 36px;
  }
}
.menu-burger {
  box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  position: fixed;
  background-color: white;
  // width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  overflow: scroll;

  display: flex;
  flex-direction: column;
  text-align: center;
  transition: transform 400ms, box-shadow 400ms;
  padding-bottom: 30px;
  span {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    &:first-of-type {
      margin-top: 30px;
    }
  }
  a {
    font-size: 14px;
    padding: 10px 50px;
  }
  label {
    position: fixed;
  }
  button {
    margin: 10px auto 20px auto;
    padding: 16px 44px;
  }
}
input[type='checkbox'] {
  position: absolute;
  left: -99999px;
}
input[type='checkbox']:not(:checked) + .menu-burger {
  transform: translateX(100%);
  box-shadow: none;
}
nav {
  padding: 22px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  @media screen and (max-width: 750px) {
    padding: 16px;
    font-size: 12px;
  }
  max-width: 1500px;
  margin: 0 auto;
}
.logo {
  height: 124px;
  @media screen and (max-width: 750px) {
    height: 100px;
  }
}
.menu {
  z-index: 100;
  width: 460px;
  margin: 0 20px;
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  li {
    cursor: default;
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px 0;
    ul {
      transition: rotate 400ms, opacity 400ms;
    }
    img {
      transition: transform 400ms, opacity 400ms;
      transform: rotate(-180deg);
    }
    &:not(:hover) {
      ul {
        opacity: 0;
        transform: scale(0);
      }
      img {
        transform: rotate(0);
      }
    }
  }
}
.sub-menu {
  background-color: white;
  // -webkit-filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2));
  // filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2));
  box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  list-style: none;
  border-radius: 4px;
  padding: 0;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100%;
  transition: transform 200ms;
  li {
    min-width: 100%;
    padding: 0;
    a {
      color: black;
      font-size: 16px;
      @media screen and (max-width: 750px) {
        font-size: 12px;
      }
      padding: 20px;
      width: 100%;
      text-align: center;
      transition: color 200ms, background-color 200ms;
      white-space: nowrap;
    }
    &:first-child a {
      border-radius: 4px 4px 0 0;
    }
    &:last-child a {
      border-radius: 0 0 4px 4px;
    }
    transition: background-color 200ms, color 200ms;

    &:first-of-type {
      border-radius: 4px 4px 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 4px 4px;
    }
  }
}
.sub-menu li:hover a,
.nuxt-link-exact-active:not(.link-logo, label) {
  background-color: var(--main);
  color: white;
}
.sub-menu li:hover a.green,
.green.nuxt-link-exact-active:not(.link-logo) {
  background-color: var(--agorae);
}

.mobile {
  display: flex;
  @media screen and (min-width: 1000px) {
    display: none;
  }
}
.desktop {
  display: flex;
  @media screen and (max-width: 1000px) {
    display: none;
  }
}
.pointer {
  cursor: pointer;
  &.nuxt-link-exact-active {
    color: var(--main);
  }
}
</style>
