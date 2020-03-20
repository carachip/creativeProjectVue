import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RecipeList from "../views/RecipeList.vue"
import Tips from "../views/Tips.vue"
import Dictionary from "../views/Dictionary.vue"
import Recipe from "../views/Recipe.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/recipeList",
    name: "RecipeList",
    component: RecipeList
  },
  {
    path: "/tips",
    name: "Tips",
    component: Tips
  },
  {
    path: "/dictionary",
    name: "Dictionary",
    component: Dictionary
  },
  {
    path: "/recipe",
    name: "Recipe",
    component: Recipe
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
