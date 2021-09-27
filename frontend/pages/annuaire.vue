<template>
  <div class="container">
    <h1>Annuaire des <span>associations</span></h1>
    <input
      v-model="filter"
      @input="$store.commit('setFilter', filter)"
      class="search"
      type="text"
      name="search"
      id="search"
      placeholder="Rechercher une association"
      autocomplete="off"
    />

    <input
      v-model="checked"
      @change="$store.commit('setChecked', checked)"
      type="checkbox"
      name="school"
      id="school"
    />
    <div class="filter first">
      <label for="school">
        <div class="label-container">Filtrer par école</div>
      </label>
      <input
        v-model="school"
        @input="$store.commit('setSchool', school)"
        type="text"
        class="search-school"
        placeholder="Entrez le nom d'une école"
      />
    </div>
    <h6>Les écoles sont : JUNIA, ESPOL, HEI, ISA, ISEN, FLD, UCL et ESTICE</h6>

    <input
      v-model="checkedTheme"
      @change="$store.commit('setCheckedTheme', checkedTheme)"
      type="checkbox"
      name="theme"
      id="theme"
    />
    <div class="filter">
      <label for="theme">Filtrer par thèmes</label>
      <input
        v-model="theme"
        @input="$store.commit('setTheme', theme)"
        type="text"
        class="search-theme"
        placeholder="Entrez un thème"
      />
    </div>
    <h6>
      Les thèmes sont : BDE, Art, Culture, Sport, Ecologie, Solidaire,
      International, Gastronomie, Humanitaire, Aumônerie, Médias et Business
      Project
    </h6>
    <h5 v-if="filteredAssociations.length > 0">
      {{ filteredAssociations.length }} résultat<span
        v-if="filteredAssociations.length > 1"
        >s</span
      >
      trouvé<span v-if="filteredAssociations.length > 1">s</span>
    </h5>
    <h5 v-else>Aucun résultat trouvé essayez une recherche différente</h5>
    <div class="galerie">
      <CardAssociations
        v-for="association in filteredAssociations"
        :key="association.id"
        :association="association"
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Annuaire',
  },
  data() {
    return {
      filter: this.$store.state.filter,
      school: this.$store.state.school,
      theme: this.$store.state.theme,
      checked: this.$store.state.checked,
      checkedTheme: this.$store.state.checkedTheme,
    }
  },
  computed: {
    filteredAssociations() {
      if (
        !this.filter &&
        ((this.checked && !this.school) || !this.checked) &&
        ((this.checkedTheme && !this.theme) || !this.checkedTheme)
      ) {
        return this.$store.state.associations
      }
      var associations = this.$store.state.associations
      if (this.checked && this.school !== '') {
        associations = associations.filter((association) => {
          if (!association.acf.ecoles || association.acf.ecoles.length === 0) {
            return false
          }
          var correspond = false
          association.acf.ecoles.forEach((ecole) => {
            if (
              ecole
                .toUpperCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .indexOf(
                  this.school
                    .toUpperCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                ) > -1
            ) {
              correspond = true
            }
          })
          return correspond
        })
      }
      if (this.checkedTheme && this.theme !== '') {
        associations = associations.filter((association) => {
          if (!association.acf.themes || association.acf.themes.length === 0) {
            return false
          }
          var correspond = false
          association.acf.themes.forEach((theme) => {
            if (
              theme
                .toUpperCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .indexOf(
                  this.theme
                    .toUpperCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                ) > -1
            ) {
              correspond = true
            }
          })
          return correspond
        })
      }
      if (this.filter && this.filter !== '') {
        associations = associations.filter((association) => {
          return (
            association.acf.nom
              .toUpperCase()
              .indexOf(this.filter.toUpperCase()) > -1 ||
            (association.acf.themes &&
              association.acf.themes.length > 0 &&
              association.acf.themes
                .reduce((a, b) => a + b)
                .toUpperCase()
                .indexOf(this.filter.toUpperCase()) > -1)
          )
        })
      }
      associations = associations.sort((a, b) => {
        var asso1 = 0
        var asso2 = 0
        if (
          a.acf.nom.toUpperCase().indexOf(this.filter.toUpperCase()) > -1 &&
          b.acf.nom.toUpperCase().indexOf(this.filter.toUpperCase()) > -1
        ) {
          asso1 = a.acf.nom.toUpperCase().indexOf(this.filter.toUpperCase())
          asso2 = b.acf.nom.toUpperCase().indexOf(this.filter.toUpperCase())
        } else if (
          a.acf.themes &&
          b.acf.themes &&
          a.acf.themes.length > 0 &&
          b.acf.themes.length > 0
        ) {
          asso1 = a.acf.themes
            .reduce((a, b) => a + b)
            .toUpperCase()
            .indexOf(this.filter.toUpperCase())
          asso2 = b.acf.themes
            .reduce((a, b) => a + b)
            .toUpperCase()
            .indexOf(this.filter.toUpperCase())
        }

        if (asso1 > asso2) {
          return 1
        } else if (asso1 < asso2) {
          return -1
        }
        return 0
      })
      return associations
    },
  },
  // mounted() {
  //   this.$fetch()
  // },
  async fetch() {
    const associations = await fetch(
      process.env.urlAPI + '/associations?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setAssociations', associations)
  },
}
</script>

<style lang="scss" scoped>
.search {
  background-color: var(--secondary);
  border: none;
  outline: none;
  border-radius: 100px;
  width: 100%;
  text-align: center;
  padding: 16px 44px;
  font-size: 16px;
  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
}
h5 {
  text-align: center;
  font-weight: 400;
  margin: 10px 0;
}
input[type='checkbox'] {
  position: absolute;
  left: -99999px;
}
h6 {
  opacity: 0;
  transition: opacity 200ms;
  text-align: center;
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  @media screen and (max-width: 750px) {
    font-size: 8px;
    display: none;
  }
}
.filter {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media screen and (min-width: 750px) {
    margin-top: 8px;
    &.first {
      margin-top: 28px;
    }
  }
  justify-content: center;
  align-items: center;
}
label {
  padding: 16px 44px;
  white-space: nowrap;
  background-color: var(--main);
  color: white;
  z-index: 1;
  cursor: pointer;
  font-size: 16px;
  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
  border-radius: 100px;
}
@media screen and (max-width: 750px) {
  .filter input {
    display: none;
  }
  input[type='checkbox']:checked + .filter {
    label {
      margin-top: 10px;
    }
    input {
      display: block;
      background-color: var(--secondary);
      border: none;
      outline: none;
      border-radius: 100px;
      text-align: left;
      padding: 16px;
      font-size: 16px;
      @media screen and (max-width: 750px) {
        font-size: 12px;
      }
      width: 100%;
      margin-top: 8px;
      text-align: center;
      // transition: all 400ms;
    }
    + h6 {
      display: block;
      opacity: 1;
      margin-bottom: 8px;
    }
  }
}
@media screen and (min-width: 750px) {
  .filter {
    flex-direction: row;
    input {
      background-color: var(--secondary);
      border: none;
      outline: none;
      border-radius: 0 100px 100px 0;
      text-align: left;
      padding: 16px;
      font-size: 16px;
      @media screen and (max-width: 750px) {
        font-size: 12px;
      }
      width: calc(100% - 202px);
      transition: opacity 400ms;
      opacity: 0;
    }
  }
  label {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  input[type='checkbox']:checked + .filter {
    label {
      border-radius: 100px 0 0 100px;
      left: 0;
      transform: translateX(0);
    }
    input {
      opacity: 1;
    }
    + h6 {
      opacity: 1;
    }
  }
}

.galerie {
  margin: 20px auto 40px auto;
  width: 100%;
  max-width: 1500px;
  display: grid;
  grid-gap: 70px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 750px) {
    grid-gap: 30px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  // @media screen and (max-width: 500px) {
  // 	grid-template-columns: repeat(1, minmax(0, 1fr));
  // }
}
</style>
