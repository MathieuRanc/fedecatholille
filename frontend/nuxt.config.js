export default {
  env: {
    urlAPI: process.env.URL_API,
    urlPages: process.env.URL_PAGES,
    urlMailer: process.env.URL_MAILER,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fédération de la catho - Lille',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index' },
      {
        name: 'google-site-verification',
        content: 'c5lNWvDXu1-YdgmrgFaI5Qo1_PPqW8_3zIolneFXM7U',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Nous avons trois missions principales : l’animation de la vie du campus, la représentation de l’ensemble des étudiants et l’accompagnement des associations. Toutes nos actions sont guidées par la volonté de vous offrir une véritable expérience de vie tout au long de vos études et de protéger vos intérêts.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Fédération de la catho - Lille',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Nous avons trois missions principales : l’animation de la vie du campus, la représentation de l’ensemble des étudiants et l’accompagnement des associations. Toutes nos actions sont guidées par la volonté de vous offrir une véritable expérience de vie tout au long de vos études et de protéger vos intérêts.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://fedecatholille.fr/logo.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Logo Fédération',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Fédération de la catho - Lille',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Nous avons trois missions principales : l’animation de la vie du campus, la représentation de l’ensemble des étudiants et l’accompagnement des associations. Toutes nos actions sont guidées par la volonté de vous offrir une véritable expérience de vie tout au long de vos études et de protéger vos intérêts.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://fedecatholille.fr/facebook.jpg',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://fedecatholille.fr/facebook.jpg',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Logo Fédération',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://fedecatholille.fr',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://fedecatholille.fr' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/colors.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/vue-burger-menu.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/image'],

  // nuxt-image module
  image: {
    // Options
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
  ],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    language: 'fr', // Recaptcha language (v2)
    siteKey: process.env.RECAPTCHA_SITE_KEY, // Site key for requests
    version: 3, // Version
    size: 'normal', // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },

  sitemap: {
    hostname: 'https://fedecatholille.fr',
    lastmod: '2021-02-18',
    routes: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/la-fede',
        changefreq: 'yearly',
        lastmod: new Date(),
        video: [
          {
            thumbnail_loc: 'https://fedecatholille.fr',
            title: 'Fédé de Lille',
            description: "L'équipe de la fédération de la catho à Lille",
          },
        ],
      },
      {
        url: '/notre-histoire',
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date(),
      },
      {
        url: '/nos-partenaires',
        changefreq: 'yearly',
        priority: 0.5,
        lastmod: new Date(),
      },
      {
        url: '/annuaire',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/inscrire-son-asso',
        changefreq: 'yearly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/actualites',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/representation-etudiante',
        changefreq: 'yearly',
        priority: 0.5,
        lastmod: new Date(),
      },
      {
        url: '/vie-sportive-du-campus',
        changefreq: 'yearly',
        priority: 0.5,
        lastmod: new Date(),
      },
      {
        url: '/international',
        changefreq: 'yearly',
        priority: 0.5,
        lastmod: new Date(),
      },
      {
        url: '/events',
        changefreq: 'monthly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/agorae',
        changefreq: 'yearly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/contact',
        changefreq: 'yearly',
        priority: 0.5,
        lastmod: new Date(),
      },
      {
        url: '/mentions-légales',
        changefreq: 'yearly',
        priority: 0,
        lastmod: new Date(),
      },
    ],
  },
}
