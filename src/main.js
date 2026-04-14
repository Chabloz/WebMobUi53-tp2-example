import { createApp } from 'vue';
import { Quasar } from 'quasar';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';

import App from './App.vue';

const myApp = createApp(App);

myApp.use(Quasar, {
  config: {
    brand: {
      primary: '#b336aa',
      secondary: '#6c4ae8',
      accent: '#560763',

      dark: '#1d1d1d',
      'dark-page': '#121212',

      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  },
  plugins: {},
});

myApp.mount('#app');