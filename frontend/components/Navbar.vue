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
      <div v-for="item in menu" :key="item.id" class="section_menu">
        <span>
          {{ item.title }}
        </span>
        <div v-if="item.childs && item.childs.length > 0">
          <NuxtLink
            v-for="sub_menu in item.childs"
            :key="sub_menu.id"
            :to="sub_menu.url"
            >{{ sub_menu.title }}</NuxtLink
          >
        </div>
        <NuxtLink v-else to="/events">{{ item.title }}</NuxtLink>
      </div>
    </div>
    <ul class="menu desktop">
      <li v-for="item in menu" :key="item.id" class="section_menu">
        <label v-if="item.childs && item.childs.length > 0" for="">{{
          item.title
        }}</label>
        <img
          v-if="item.childs && item.childs.length > 0"
          src="../assets/chevron-down.svg"
          alt="chevron"
        />
        <ul v-if="item.childs && item.childs.length > 0" class="sub-menu">
          <li v-for="sub_menu in item.childs" :key="sub_menu.id">
            <NuxtLink :to="sub_menu.url">{{ sub_menu.title }}</NuxtLink>
          </li>
        </ul>
        <NuxtLink v-else tag="label" class="pointer" to="/events"
          >Nos events</NuxtLink
        >
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
      menu: [],
    }
  },
  watch: {
    $route() {
      this.burger = false
    },
  },
  async fetch() {
    this.menu = (
      await fetch(process.env.urlPages + '/menu').then((res) => res.json())
    ).map((item) => {
      return {
        id: item.ID,
        url: item.url,
        title: item.title,
        parent: parseInt(item.menu_item_parent),
      }
    })
    this.menu = this.menu
      .filter((item) => item.parent === 0)
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
          childs: this.menu
            .filter((sub_menu) => sub_menu.parent === item.id)
            .map((sub_menu) => {
              return {
                id: sub_menu.id,
                url: sub_menu.url,
                title: sub_menu.title,
              }
            }),
        }
      })
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
  div {
    display: flex;
    flex-direction: column;
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
.section_menu:last-child {
  li:hover a,
  .nuxt-link-exact-active:not(.link-logo) {
    background-color: var(--agorae);
  }
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
