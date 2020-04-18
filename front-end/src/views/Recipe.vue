<template>
    <div>
        <div id="body">
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
                    <img id="image" :src="recipeData.imagePath"/>
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
                <div id="options">
                    <router-link :to="{ name: 'EditRecipe', params: { id: recipeData._id }}">
                        <button>Edit</button>
                    </router-link>
                    <button @click="deleteRecipePopup">Delete</button>
                </div>
            </div>
            <transition v-if="showPopup" name="modal">
                <div class="modal-mask">
                    <div class="modal-container">
                        Are you sure you want to delete the recipe for {{recipeData.name}}?
                        <div id="buttons">
                            <button @click="deleteRecipe">Yes</button>
                            <button @click="showPopup = false">No</button>
                        </div>
                    </div>
                </div>
            </transition>
            <p v-if="error">{{error}}</p>
        </div>

        <footer>
            <a id="footer" href="https://github.com/carachip/creativeProjectVue.git">https://github.com/carachip/creativeProjectVue.git</a>
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Recipe',
    data() {
        return {
            recipeData: {},
            error: "",
            showPopup: false
        }
    },
    methods: {
        async getRecipe() {
            try {
                let response = await axios.get("/api/items/" + this.$route.params.id);
                this.recipeData = response.data;
            } catch (error) {
                this.error = error.response.data.message;
            }
        },
        deleteRecipePopup() {
            this.showPopup = true;
        },
        async deleteRecipe() {
            try {
                await axios.delete("/api/items/" + this.recipeData._id);
                this.$router.push({path: '/recipeList'});
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getRecipe();
    }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  transition: opacity 0.5s ease;
  display: flex;
  transition: background 0.2s ease-in-out, height 1s ease-in-out;
  transition: height 0.2s ease-in-out, width 0.2s ease-in-out;
  justify-content: center;
  transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
}

.modal-container {
  width: 50%;
  height: max-content;
  margin-top: 80px;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all 0.5s ease;
}

/*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


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
#options {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 25px;
    font-weight: 600;
    font-family: 'Amatic SC', cursive;
}
#buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
@media (max-width: 800px) {
    #description {
        flex-direction: column;
        margin-bottom: 20px;
    }
}
</style>