<template>
    <div>
        <div id="body">
            <div id="navigation">
                Home > Recipes
            </div>
            <router-link class="subheadings" to="/editRecipe/add">>>Add a new recipe</router-link>
            <div id="pageInfo">
                <div v-for="heading in Object.keys(recipeMap)" :key="heading">
                    <div class="subheadings">{{heading}}</div>
                    <ul>
                        <li v-for="recipe in recipeMap[heading]" :key="recipe.name">
                            <router-link class="nav-link" :to="{ name: 'Recipe', params: { id: recipe._id }}"><div>{{recipe.name}}</div></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer>
            <a id="footer" href="https://github.com/carachip/creativeProjectVue.git">https://github.com/carachip/creativeProjectVue.git</a>
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'RecipeList',
    data() {
        return {
            recipeList: [],
        }
    },
    computed: {
        recipeMap() {
            let map = {}
            this.recipeList.sort(this.compare);
            for (let i = 0; i < this.recipeList.length; i++) {
                var type = this.recipeList[i].type;
                if (map[type] == undefined) {
                    map[type] = [];
                }
                map[type].push(this.recipeList[i]);
            }
            return map;
        }
    },
    methods: {
        async getRecipes() {
            try {
                let response = await axios.get("/api/items");
                this.recipeList = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const typeA = a.type.toUpperCase();
            const typeB = b.type.toUpperCase();

            let comparison = 0;
            if (typeA > typeB) {
                comparison = 1;
            } else if (typeA < typeB) {
                comparison = -1;
            }
            return comparison;
        }
    },
    created() {
        this.getRecipes();
    }
  }
</script>

<style scoped>
a {
    color: black;
}
</style>