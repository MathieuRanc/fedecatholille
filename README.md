# Lille "Fédération de la Catho" website

[![image](https://fedecatholille.fr/_nuxt/img/logo.6b8e386.svg)](https://fedecatholille.fr)

## Summary

- [Technos](#technos)
- [Intruduction](#intruduction)
  - [The project](#the-project)
  - [Contents](#contents)
- [Further information](#further-information)
  - [Pages tree](#pages-tree)

# Technos

**frontend**

![image](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![image](https://img.shields.io/badge/nuxt.js-00C58E?style=for-the-badge&logo=nuxtdotjs&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

**backend**

![image](https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white)
![image](https://img.shields.io/badge/strapi-2e7eea?style=for-the-badge&logo=strapi&logoColor=white)

**mail**

![image](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

# Intruduction

## The project

The repository contains all of the [fedecatholille.fr](https://fedecatholille.fr) code

## Contents

- The frontend was made with the [Nuxt.js](https://nuxtjs.org/fr/) framework
- The backend was made with Wordpress, [ACF](https://www.advancedcustomfields.com) and [Custom Post Type UI](https://fr.wordpress.org/plugins/custom-post-type-ui/) plugins
- The contact function via a form is carried out in PHP using [Composer](https://getcomposer.org), secured against spam by a reCAPTCHA from google

# Further information

- The site does not contain any sensitive data
- The documentation for the Wordpress API which allows you to retrieve site data is available at [API Wordpress](https://backoffice.fedecatholille.fr/wp-json/wp/v2)
- A second API is available with ACF support is available at [backoffice.fedecatholille.fr/wp-json/acf/v3](https://backoffice.fedecatholille.fr/wp-json/acf/v3)
- If you spot any problem on the site, please let me know in the [issues](https://github.com/MathieuRanc/fedecatholille/issues) tab

## Pages tree

```console
fedecatholille.fr
├── _slug.vue
├── actualites.vue
├── agorae.vue
├── annuaire.vue
├── article
│   └── _id.vue
├── association
│   └── _id.vue
├── contact.vue
├── donnez-votre-avis.vue
├── event
│   └── _id.vue
├── events.vue
├── index.vue
├── inscrire-son-asso.vue
├── la-fede.vue
└── nos-partenaires
    ├── _id.vue
    └── index.vue
```

*Automatically generated via the* [`tree`](http://mama.indstate.edu/users/ice/tree/) *command* 🐧
