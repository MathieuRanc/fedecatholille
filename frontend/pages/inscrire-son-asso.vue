<template>
  <div class="container">
    <h1>Inscrire son <span>Asso</span></h1>
    <form @submit.prevent="onSubmit" ref="form">
      <label for="ecole">Email</label>
      <div v-if="!validator.email" class="validator">L'email est requis</div>
      <input
        v-model="email"
        :class="validator.email ? '' : 'invalid'"
        maxlength="255"
        type="email"
        name="email"
        id="email"
        placeholder="Entrez votre email"
      />
      <label for="association">Nom de l'association</label>
      <div v-if="!validator.association" class="validator">
        Le nom de votre association est requis
      </div>
      <input
        v-model="association"
        :class="validator.association ? '' : 'invalid'"
        maxlength="255"
        type="text"
        name="association"
        id="association"
        placeholder="Entrez le nom de votre association"
      />
      <label for="ecole">Ecole(s) ou faculté(s)</label>
      <div v-if="!validator.ecole" class="validator">Ce champ est requis</div>
      <input
        v-model="ecole"
        :class="validator.ecole ? '' : 'invalid'"
        maxlength="255"
        type="text"
        name="ecole"
        id="ecole"
        placeholder="Entrez le nom de votre école ou faculté ou le nom de plusieurs écoles ou facultés"
      />
      <label for="description">Description</label>
      <div v-if="!validator.description" class="validator">
        La description est requise
      </div>
      <textarea
        v-model="description"
        :class="validator.description ? '' : 'invalid'"
        rows="18"
        name="description"
        id="description"
        placeholder="Entrez une description de votre association, cette description peut contenir un text décrivant l'association des liens vers les réseaux sociaux de l'application ou tout ce que vous voulez en rapport avec votre association"
      />
      <label>Logo</label>
      <div class="logo">
        <!-- accept="image/png, image/jpeg" -->
        <input type="file" name="logo" id="logo" @change="onFileChange" />
        <div v-if="!validator.logo" class="validator">Le logo est requis</div>
        <div class="file">
          <div>
            Sélectionnez une image transparente de préférence
            <label for="logo" :class="validator.logo ? '' : 'invalid'"
              >Parcourir</label
            >
          </div>
          <br />
        </div>
        <div v-if="validator.logo" class="logo">
          <img :src="logo" />
        </div>
      </div>
      <input
        v-if="!clicked"
        type="submit"
        value="Envoyer la demande d'adhésion"
      />
      <Loader v-if="clicked" />
      <div class="sended">
        <span v-if="success === true" class="success">
          ✓ Le message a été envoyé avec succès</span
        >
        <span v-else-if="success === false" class="danger">
          × Il y a eu une erreur vérifiez votre message ou réessayez
          ultérieurement
        </span>
      </div>
    </form>
    <div v-if="page" v-html="page.content" class="text-explicatif" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    title: 'Inscrire son asso',
  },
  data() {
    return {
      email: null,
      association: null,
      ecole: null,
      description: null,
      logo: null,
      success: null,
      clicked: false,
    }
  },
  computed: {
    page() {
      return this.$store.state.pages.find(
        (page) => page.slug === 'inscrire-son-asso'
      )
    },
    validator() {
      return {
        email: this.email !== '',
        association: this.association !== '',
        ecole: this.ecole !== '',
        description: this.description !== '',
        logo: this.logo !== '',
      }
    },
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  methods: {
    correctForm() {
      if (email && association && ecole && description && logo) {
        return true
      }
      return false
    },
    async onSubmit() {
      if (!this.email) this.email = ''
      if (!this.association) this.association = ''
      if (!this.ecole) this.ecole = ''
      if (!this.description) this.description = ''
      if (!this.logo) this.logo = ''
      if (
        this.validator.email &&
        this.validator.association &&
        this.validator.ecole &&
        this.validator.description &&
        this.validator.logo &&
        !this.clicked
      ) {
        this.clicked = true
        const token = await this.$recaptcha.execute()

        var message = `<strong>Email :</strong><br/>${this.email}<br/><br/>`
        message += `<strong>Nom de l'association :</strong><br/>${this.association}<br/><br/>`
        message += `<strong>Ecole(s) ou faculté(s) :</strong><br/>${this.ecole}<br/><br/>`
        message += `<strong>Description :</strong><br/>${this.description.replace(
          '\n',
          '<br/><br/>'
        )}<br/><br/>`
        message += `<strong>Logo :</strong><br/>`

        let formData = new FormData()
        formData.append('message', message)
        formData.append('logo', this.logo)
        formData.append('token', token)
        const vm = this
        axios
          .post(process.env.urlMailer, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(() => {
            vm.success = true
            if (vm.success) {
              vm.email = null
              vm.association = null
              vm.ecole = null
              vm.description = null
              vm.logo = null
            }
            vm.clicked = false
          })
      } else {
        this.success = false
        const top = this.$refs.form.offsetTop
        window.scrollTo(0, top)
      }
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage(file) {
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.logo = e.target.result
      }
      reader.readAsDataURL(file)
    },
  },
   beforeMount() {
     this.$fetch()
   },fetchOnServer: false,
  async fetch() {
    const pages = await fetch(
      process.env.urlPages + '/pages?per_page=100'
    ).then((res) => res.json())
    this.$store.commit('setPages', pages)
  },
}
</script>

<style lang="scss">
.text-explicatif {
  h2 {
    margin: 60px 0 20px 0;
  }
  p {
    text-align: justify;
    line-height: 24px;
    @media screen and (max-width: 750px) {
      line-height: 18px;
    }
    font-size: 16px;
    @media screen and (max-width: 750px) {
      font-size: 12px;
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 470px) {
  .file {
    div {
      display: flex;
      flex-direction: column;
      label {
        margin: 8px auto 0 0;
        margin-right: auto;
      }
    }
  }
}

img {
  max-width: 100%;
  max-height: 300px;
}
.logo {
  margin-right: auto;
  position: relative;
  button {
    background-color: rgba(174, 174, 174, 0.4);
    backdrop-filter: blur(5px);
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: box-shadow 200ms;
    &:hover {
      box-shadow: 0 4px 10px rgba(128, 128, 128, 0.25);
    }
  }
}
</style>
