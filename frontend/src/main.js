// Import the Vue.JS App
import Vue from 'vue';
import App from '@/App.vue';

// Import the Plugins
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';

// Import Fireabse & the PWA Service Worker
import '@/plugins/firebase';
import '@/registerServiceWorker';

// Import the Stylesheets
import '@/styles/general.css';
import '@/styles/layout.css';
import '@/styles/vuetify.css';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
