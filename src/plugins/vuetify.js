import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
// import colorsUtils from '../utils/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        // // dark: false,
        // light: {
        //     primary: colorsUtils.purple,
        //     secondary: colorsUtils.grey.darken1,
        //     accent: colorsUtils.shades.black,
        //     error: colorsUtils.red.accent3,
        // },
        // dark: {
        //     primary: colorsUtils.blue.lighten3,
        // },
    },
});
