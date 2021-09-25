<template>
  <div class="container">
    <h1><span>Contact</span></h1>
    <form @submit.prevent="onSubmit" ref="form">
      <label for="nom">Nom de contact</label>
      <div v-if="!validator.nom" class="validator">
        Un nom de contact est requis
      </div>
      <input
        v-model="nom"
        :class="validator.nom ? '' : 'invalid'"
        maxlength="255"
        type="text"
        name="nom"
        id="nom"
        placeholder="Entrez votre nom de contact"
      />
      <label for="ecole">Ecole ou faculté</label>
      <div v-if="!validator.ecole" class="validator">
        Un nom d'école est requis
      </div>
      <input
        v-model="ecole"
        :class="validator.ecole ? '' : 'invalid'"
        maxlength="255"
        type="text"
        name="ecole"
        id="ecole"
        placeholder="Entrez le nom de votre école ou faculté"
      />
      <label for="mail">Email</label>
      <div v-if="!validator.emailTel" class="validator">
        Un email ou numéro de téléphone est requis
      </div>
      <input
        v-model="email"
        :class="validator.emailTel ? '' : 'invalid'"
        maxlength="255"
        type="email"
        name="email"
        id="email"
        placeholder="Entrez votre email"
      />
      <label for="telephone">Ou numéro de téléphone</label>
      <div v-if="!validator.emailTel" class="validator">
        Un numéro de téléphone ou email est requis
      </div>
      <input
        v-model="telephone"
        :class="validator.emailTel ? '' : 'invalid'"
        maxlength="255"
        type="tel"
        name="telephone"
        id="telephone"
        placeholder="Entrez votre numéro de téléphonne"
      />
      <label for="demande">Demande</label>
      <div v-if="!validator.demande" class="validator">
        Votre demande est requise
      </div>
      <textarea
        v-model="demande"
        :class="validator.demande ? '' : 'invalid'"
        rows="18"
        type="text"
        name="demande"
        id="demande"
        placeholder="Entrez votre demande"
      />
      <input v-if="!clicked" type="submit" value="Envoyer le message" />
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    title: 'Contact',
  },
  data() {
    return {
      nom: null,
      ecole: null,
      email: null,
      telephone: null,
      demande: null,
      success: null,
      clicked: false,
    }
  },
  computed: {
    validator() {
      return {
        nom: this.nom !== '',
        ecole: this.ecole !== '',
        emailTel: this.email !== '' || this.telephone !== '',
        demande: this.demande !== '',
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
    async onSubmit() {
      if (!this.nom) this.nom = ''
      if (!this.ecole) this.ecole = ''
      if (!this.email) this.email = ''
      if (!this.telephone) this.telephone = ''
      if (!this.demande) this.demande = ''
      if (
        this.validator.nom &&
        this.validator.ecole &&
        this.validator.emailTel &&
        this.validator.demande &&
        !this.clicked
      ) {
        this.clicked = true
        const token = await this.$recaptcha.execute()

        var message = `<strong>Nom de contact :</strong><br/>${this.nom}<br/><br/>`
        message += `<strong>Ecole(s) ou faculté(s) :</strong><br/>${this.ecole}<br/><br/>`
        if (this.email !== '' && this.telephone !== '') {
          message += `<strong>Email :</strong><br/>${this.email}<br/><br/>`
          message += `<strong>Téléphone :</strong><br/>${this.telephone}<br/><br/>`
        } else if (this.email !== '')
          message += `<strong>Email :</strong><br/>${this.email}<br/><br/>`
        else
          message += `<strong>Téléphone :</strong><br/>${this.telephone}<br/><br/>`
        message += `<strong>Demande :</strong><br/>${this.demande.replace(
          '\n',
          '<br/>'
        )}`

        let formData = new FormData()
        formData.append('message', message)
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
            vm.nom = null
            vm.ecole = null
            vm.email = null
            vm.telephone = null
            vm.demande = null
          })
          .catch(() => {
            vm.success = false
          })
        this.clicked = false
      } else {
        this.success = false
        const top = this.$refs.form.offsetTop
        window.scrollTo(0, top)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
button,
input[type='submit'] {
  margin: 40px auto 0 auto;
}
</style>
