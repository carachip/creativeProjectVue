import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RecipeList from "../views/RecipeList.vue"
import Tips from "../views/Tips.vue"
import Dictionary from "../views/Dictionary.vue"
import Recipe from "../views/Recipe.vue"
import EditRecipe from "../views/EditRecipe.vue"

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
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe
  },
  {
    path: "/editRecipe/:id",
    name: "EditRecipe",
    component: EditRecipe
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
