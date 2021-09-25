export const state = () => ({
  articles: [],
  associations: [],
  equipe: [],
  evenements: [],
  representationsEtudiantes: [],
  partenaires: [],
  partenairesAgorae: [],
  pages: [],
  filter: '',
  school: '',
  checked: false,
  theme: '',
  checkedTheme: false,
})

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setAssociations(state, associations) {
    state.associations = associations
  },
  setEquipe(state, equipe) {
    state.equipe = equipe.map((membre) => {
      return { id: membre.id, acf: membre.acf }
    })
  },
  setRepresentationsEtudiantes(state, representationsEtudiantes) {
    state.representationsEtudiantes = representationsEtudiantes
  },
  setEvenements(state, evenements) {
    state.evenements = evenements
  },
  setPartenaires(state, partenaires) {
    state.partenaires = partenaires
  },
  setPartenairesAgorae(state, partenairesAgorae) {
    state.partenairesAgorae = partenairesAgorae
  },
  setFilter(state, filter) {
    state.filter = filter
  },
  setSchool(state, school) {
    state.school = school
  },
  setTheme(state, theme) {
    state.theme = theme
  },
  setChecked(state, checked) {
    state.checked = checked
  },
  setCheckedTheme(state, checkedTheme) {
    state.checkedTheme = checkedTheme
  },
  setPages(state, pages) {
    state.pages = pages.map((page) => {
      if (page.acf && page.acf.dossier_dinscription) {
        return {
          title: page.title.rendered,
          slug: page.slug,
          content: page.content.rendered.replace(
            '[urlInscriptionFile]',
            page.acf.dossier_dinscription
          ),
          image: null,
        }
      } else if (page.acf && page.acf.video) {
        return {
          title: page.title.rendered,
          slug: page.slug,
          content: page.content.rendered,
          video: page.acf.video,
          image: null,
        }
      }
      return {
        title: page.title.rendered,
        slug: page.slug,
        content: page.content.rendered,
        image: null,
      }
    })
  },
}
