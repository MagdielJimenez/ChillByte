import Vue,{Transition} from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Scrollactive from 'vue-scrollactive';
import VueRouter from 'vue-router'
import routes from './router';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// For Vue typed JS animation
import VueTyperPlugin from 'vue-typer'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTyperPlugin)
Vue.component('transition',Transition);
Vue.component('scrollactiveComp', Scrollactive);

library.add(faWhatsapp)
library.add(faEnvelope)
library.add(faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const router=new VueRouter({
  routes:routes
});
Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
