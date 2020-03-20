<template>
    <div>
        <div id="body">
            <div id="navigation">
                Home > Kitchen Dictionary
            </div>
            <div id="pageInfo">
                <div class="subheadings">Kitchen Dictionary</div>
                <div id="descriptionBox">
                    <form id="inputForm">
                        <span>Please enter any kitchen terms you are unfamiliar with into the dictionary!</span>
                        <div id="inputAndButton">
                            <input id="userInput" v-model="search" type="text"/>
                            <input @submit.prevent="searchWord()" id="inputSubmit" type="submit" value="Submit"/>
                        </div>
                    </form>
                    <div v-if="notFound" id="notFound">
                        <h1>Word not found</h1>
                    </div>
                    <div v-if="searchResults" id="dictionaryResults">
                        <div id='dictName'>
                            <h1>{{searchResults.word}}</h1>
                            <div v-if="searchResults.pronunciation">[{{searchResults.pronunciation}}]</div>
                        </div>
                        <div v-for="(definition, index) in searchResults.definitions" :key="index">
                            <div class='singleDefinition'>
                                <div>
                                    <div class='numberAndType'>
                                        <div>{{index + 1}}.</div>
                                        <em>{{definition.type}}</em>
                                    </div>
                                    <div class='definition'>
                                        <div>{{definition.definition}}</div>
                                        <em v-if="definition.example" class='exampleSentence'>Example: {{definition.example}}</em>
                                    </div>
                                </div>
                                <img v-if="definition.image" class="dictImage" src=definition.image/>
                            </div>
                            <div class="lineBreak"></div>
                        </div>
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
export default {
    name: 'Dictionary',
    data() {
        return {
            search: "",
            searchResults: {},
            notFound: false
        }
    },
    methods: {
        searchWord: function() {
            if (this.search === "") return;
            const url = "https://cors-anywhere.herokuapp.com/https://owlbot.info/api/v4/dictionary/" + this.search;
            fetch(url, {mode: "cors", headers: {Authorization: "Token 582abfda2d9a5c10e57548b285a1a0589d8313d4", "Set-Cookie": "HttpOnly; Secure; SameSite=None"}})
                .then(function(response) {
                return response.json();
                }).then(function(json) {
                    json.image = json.image_url
                    this.searchResults = json;
                    this.notFound = false
                })
                .catch(function () {
                    this.searchResults = {};
                    this.notFound = true
                });
        }
    }
}
</script>

<style scoped>
#inputForm label {
    margin-bottom: 15px;
}

#descriptionBox {
    margin: 40px;
}

#dictName{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 20px;
}
#dictName h1 {
    margin-right: 20px;
    font-weight: bold;
}
.singleDefinition {
    display: flex;
    flex-direction: row;
}
.numberAndType {
    display: flex;
    flex-direction: row;
}
.numberAndType div {
    margin-right: 15px;
}
.definition {
    margin-left: 20px;
}
.exampleSentence {
    color: #454A4A;
}
.dictImage {
    min-width: 100px;
    height: 100px;
    margin-left: 15px;
    align-self: center;
    padding: 5px;
    background-color: lightslategrey;
}
.lineBreak {
    border-style: solid;
    border-width: 0px;
    border-top-width: 2px;
    border-color: rgb(86, 99, 110);
    margin-top: 20px;
    margin-bottom: 20px;
}
#notFound {
    margin-top: 40px;
    text-align: center;
}
@media (max-width: 800px) {
    #descriptionBox {
        margin: 15px;
    }
    #userInput {
        width: 170px;
    }
    .singleDefinition {
        flex-direction: column;
    }
    .dictImage {
        margin-top: 10px;
    }
}
</style>