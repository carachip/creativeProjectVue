import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./recipeData.js";

let data = {
  recipeList: mock,
  currentRecipe: {}
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
