<template>
    <div>
        <div v-if="!recipeData.name" id="body">
            <div id="navigation">
                Home > Recipes >
            </div>
            <div id="pageInfo">
                Please go back to the previous page to find a recipe!
            </div>
        </div>

        <div v-else id="body">
            <div id="navigation">
                Home > Recipes > {{recipeData.name}}
            </div>
            <div id="pageInfo">
                <h1>{{recipeData.name}}</h1>
                <div id="description">
                    <div>
                        <div class="subheadings">Description</div>
                        <div id="descriptionBox">
                            <em>
                                {{recipeData.description}}
                            </em>
                            <div id="descriptionInfo">
                                <div>
                                    <div class="subheadings">
                                        Servings
                                    </div>
                                    <div>
                                        {{recipeData.servings}}
                                    </div>
                                </div>
                                <div>
                                    <div class="subheadings">
                                        TIME
                                    </div>
                                    <div>
                                        {{recipeData.time}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img id="image" :src="'/images/' + recipeData.image">
                </div>
                <div id="ingredients">
                    <div class="subheadings">Ingredients</div>
                    <ul> 
                        <li v-for="(ingredient, index) in recipeData.ingredients" :key="index">
                            {{ingredient}}
                        </li>
                    </ul>
                </div>
                <div id="Directions">
                    <div class="subheadings">Directions</div>
                    <ol>
                        <li v-for="(direction, index) in recipeData.directions" :key="index">
                            {{direction}}
                        </li>
                    </ol>
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
    name: 'Recipe',
    computed: {
    recipeData() {
        return this.$root.$data.currentRecipe;
    }
  },
}
</script>

<style scoped>
#description {
    display: flex;
    flex-direction: row;
}
#descriptionInfo {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center
}
#image {
    background-color: lightslategray;
    padding: 20px;
    max-width: 300px;
    max-height: 300px;
    align-self: center;
}
@media (max-width: 800px) {
    #description {
        flex-direction: column;
        margin-bottom: 20px;
    }
}
</style>