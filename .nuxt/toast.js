import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"top-center","fullWidth":true,"duration":2000})

const globals = undefined
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
