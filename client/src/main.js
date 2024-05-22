import "vuetify/styles";
import "@/styles/styles.less";

import { createApp } from "vue"
import { createPinia } from "pinia";

import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue"
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

app
  .use(pinia)
  .use(router)
  .use(vuetify);

router.isReady().then(() => app.mount("#app"));
