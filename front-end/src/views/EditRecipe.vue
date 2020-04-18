<template>
    <div>
        <div id="body">
            <div id="navigation">
                Home > Recipes > Edit Recipe
            </div>
            <div id="pageInfo" class="subheadings">
                <div v-if="editing" id="title">Edit your recipe</div>
                <div v-else id="title">Add a new Recipe!</div>
                <div id="newRecipe">
                    <div>Recipe Name</div><input v-model="name">
                    <div>Category</div><input v-model="type">
                    <div>Description</div><textarea v-model="description"/>
                    <div>Servings</div><input v-model="servings">
                    <div>Time</div><input v-model="time">
                    <div>Ingredients</div> <div class="howMany">How many?<input type="number" min="1" v-model="numIngredients"/></div>
                    <ol>
                        <li v-for="(placeholder, index) in numIngredientsList" :key="index">
                            <input class="list" v-model="ingredients[index]"/>
                        </li>
                    </ol>
                    <div>Directions</div><div class="howMany">How many?<input type="number" min="1" v-model="numDirections"/></div>
                    <ol>
                        <li v-for="(placeholder, index) in numDirectionsList" :key="index">
                            <input class="list" v-model="directions[index]"/>
                        </li>
                    </ol>
                    <div v-if="editing" id="saveEditing">
                        Image
                        <img :src="file"/>
                        <div id="buttons">
                            <router-link to="/recipeList"><button>Cancel</button></router-link>
                            <button @click="save()">Save</button>
                        </div>
                    </div>
                    <div v-else>
                        <input type="file" id="photoUpload" name="photo" @change="fileChanged">
                        <button @click="upload">Upload</button>
                    </div>
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
    name: 'EditRecipe',
    data() {
        return {
            file: null,
            type: "",
            name: "",
            description: "",
            servings: "",
            time: "",
            ingredients: [""],
            directions: [""],
            numIngredients: 1,
            numDirections: 1,
            editing: false
        }
    },
    watch: {
        numIngredients: function() {
            for (let i = 0; i < this.numIngredients; i++) {
                if (this.ingredients[i] == undefined) {
                    this.ingredients[i] = "";
                }
            }
        },
        numDirections: function() {
            for (let i = 0; i < this.numDirections; i++) {
                if (this.directions[i] == undefined) {
                    this.directions[i] = "";
                }
            }
        },
        
    },
    computed: {
        numIngredientsList() {
            let list = [];
            for (let i = 0; i < this.numIngredients; i++) {
                list.push("");
                
            }
            return list;
        },
        numDirectionsList() {
            let list = [];
            for (let i = 0; i < this.numDirections; i++) {
                list.push("");
            }
            return list;
        },
    },
    methods: {
        async getRecipe() {
            try {
                let response = await axios.get("/api/items/" + this.$route.params.id);
                let recipe = response.data;
                this.file = recipe.imagePath;
                this.type = recipe.type;
                this.name = recipe.name;
                this.description = recipe.description;
                this.servings = recipe.servings;
                this.time = recipe.time;
                this.ingredients = recipe.ingredients;
                this.directions = recipe.directions;
                this.numIngredients = this.ingredients.length;
                this.numDirections = this.directions.length;
            } catch (error) {
                this.error = error.response.data.message;
            }
        },
        async upload() {
            try {
                const formData = new FormData();
                formData.append('photo', this.file, this.file.name);
                //Make sure types are all in the same format
                this.type = this.type.toLowerCase();
                this.type = this.type[0].toUpperCase() +  this.type.slice(1);
                let r1 = await axios.post('/api/photos', formData);
                await axios.post('/api/items', {
                    type: this.type,
                    name: this.name,
                    description: this.description,
                    servings: this.servings,
                    time: this.time,
                    ingredients: this.ingredients.slice(0,this.numIngredients),
                    directions: this.directions.slice(0,this.numDirections),
                    imagePath: r1.data.path
                });
                this.$router.push({path: '/recipeList'});
            } catch (error) {
                console.log(error);
            }
        },
        async save() {
            try {
                await axios.put("/api/items/" + this.$route.params.id, {
                    type: this.type,
                    name: this.name,
                    description: this.description,
                    servings: this.servings,
                    time: this.time,
                    ingredients: this.ingredients.slice(0,this.numIngredients),
                    directions: this.directions.slice(0,this.numDirections),
                    imagePath: this.file
                });
                this.$router.push({path: '/recipeList'});
            } catch (error) {
                console.log(error);
            }   
        },
        fileChanged(event) {
            this.file = event.target.files[0];
        }
    },
    created() {
        if (this.$route.params.id != "add") {
            this.editing = true;
        } else {
            this.editing = false;
        }
        if (this.editing) {
            this.getRecipe();
        }
    }
  }
</script>

<style scoped>
.subheadings{
    text-decoration: none;
}
#title {
    text-decoration: underline;
}
#newRecipe div, button, input, textarea {
    margin-top: 10px;
    font-size: 25px;
}
#photoUpload {
    margin-top: 10px;
    font-size: 25Px;

}
#newRecipe textarea {
    width: 100%;
}
.howMany {
    display: flex;
    flex-direction: row;
    font-size: 20px !important;
    align-items: center;
    margin-left: 20px;
}
.howMany input {
    margin-left: 10px;
    width: 50px;
}
.list {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
}
#saveEditing {
    display: flex;
    flex-direction: column;
}
#saveEditing button {
    align-self: flex-end;
}
#saveEditing img {
    max-width: 200px;
    max-height: 200px;
}
#buttons {
    align-self: flex-end;
}
button {
    color: black;
    padding: 5px;
    padding-right: 10px;
    padding-left: 10px;
    margin: 5px;
}
</style>