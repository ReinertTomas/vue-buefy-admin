/* Core */
import Vue from "vue";
import Buefy from "buefy";
/* Router & Store */
import router from "@/router";
import store from "@/store";
/* Vue. Main component */
import App from "@/App.vue";
/* Service Worker */
import "./registerServiceWorker";
/* Styles */
import "@/assets/scss/main.scss";

/* Default title tag */
const defaultDocumentTitle = "Vue Bulma Admin";

/* Collapse mobile aside menu on route change & set document title from route meta */
router.afterEach(to => {
  store.commit("asideMobileStateToggle", false);

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`;
  } else {
    document.title = defaultDocumentTitle;
  }
});

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
