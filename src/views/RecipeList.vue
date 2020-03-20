<template>
    <div>
        <div id="body">
            <div id="navigation">
                Home > Recipes
            </div>
            <div id="pageInfo">
                <div v-for="heading in Object.keys(recipeList)" :key="heading">
                    <div class="subheadings">{{heading}}</div>
                    <ul>
                        <li v-for="recipe in recipeList[heading]" :key="recipe.name">
                            <div @click="setCurrentRecipe(recipe)"><router-link class="nav-link" to="/recipe">{{recipe.name}}</router-link></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer>
            <a id="footer" href="https://github.com/carachip/creativeProject.git">https://github.com/carachip/creativeProject.git</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'RecipeList',
    computed: {
        recipeList() {
            return this.$root.$data.recipeList;
        }
    },
    methods: {
        setCurrentRecipe: function(recipe) {
            this.$root.$data.currentRecipe = recipe; 
        }
    }
  }
</script>

<style scoped>
a {
    color: black;
}
</style>