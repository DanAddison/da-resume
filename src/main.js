// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo)
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i'
  })

  head.meta.push({
    name: 'keywords',
    content: 'Web Developer, Web Designer, Resume, online CV, Folkestone'
  })
  head.meta.push({
    name: 'description',
    content: 'Folkestone based web developer Dan Addison\'s online resume with portfolio'
  })
  head.meta.push({
    name: 'author',
    content: 'Dan Addison'
  })
}
