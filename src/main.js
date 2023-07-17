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

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTyperPlugin)
Vue.component('transition',Transition);
Vue.component('scrollactiveComp', Scrollactive);

const router=new VueRouter({
  routes:routes
});
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
