import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ed773b',
        secondary: '#ed654e',
        info: '#0087c4',
        success: '#aed11f',
        warning: '#f2c224',
        error: '#cf1f3c',
        light: '#f7f7f7',
        dark: '#242323',
      },
    },
  },
});
