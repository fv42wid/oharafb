/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you set extractStyles to true
// in config/webpack/loaders/vue.js) to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import Flickity from 'flickity'

import MainTabs from './layout/main-tabs.vue'
import MembershipForm from './layout/membership-form.vue'

Vue.use(VueResource)
Vue.use(TurbolinksAdapter)
Vue.use(VeeValidate)

document.addEventListener('turbolinks:load', () => {
  Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  var app = new Vue({
      el: '#vue-app',
      data: function() {
        return {
            mobileNav: false
        }
      },
      methods: {
          toggleNav: function() {
              this.mobileNav = !this.mobileNav
          }
      },
      mounted: function () {
          var flickity = new Flickity('.main-carousel', {
              wrapAround: true,
              autoPlay: true
          })
      },
      created: function() {
          console.log('main vue created')

      },
      components: {
          'main-tabs' : MainTabs,
          'membership-form' : MembershipForm
      }
  })
})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from './app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
