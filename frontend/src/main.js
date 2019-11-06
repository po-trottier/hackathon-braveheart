// Import 3rd Party Packages
import firebase from 'firebase';

// Import the Vue.JS App
import Vue from 'vue';
import App from '@/App.vue';

// Import the Plugins
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';

// Import the PWA Service Worker
import '@/registerServiceWorker';

// Import the Stylesheets
import '@/styles/general.css';
import '@/styles/layout.css';
import '@/styles/vuetify.css';

// Initialize Firebase
firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
