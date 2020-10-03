import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import pt from 'vuetify/src/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#ea4965',
        secondary: '#28253f',
        accent: '#82B1FF',
        error: '#e63946',
        info: '#1aa4d2',
        success: '#43aa8b',
        warning: '#FFC107',
        background: '#f4f4f4'
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
});
