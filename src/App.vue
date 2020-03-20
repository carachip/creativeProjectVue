<template>
  <div id="app">
    <div id="nav">
        <div id="title">
            <h2>Anyone can cook!</h2>
        </div>
        <nav id="menuBar" class="navbar navbar-expand navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav justify-content-center w-100">
                <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/recipeList">Recipes</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/tips">Kitchen Tips</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/dictionary">Kitchen Dictionary</router-link></li>
              </ul>
            </div>
        </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');

#title {
    display: flex;
    flex-grow: inherit;
    background-color: lightsteelblue;
    justify-content: center;
    padding: 5px;
    font-family: 'Amatic SC', cursive;
}
#title h2 {
    margin: .25em;
    text-align: center;
    font-size: 4em;
    font-weight: bold;
}

#menuBar{
    background-color: lightslategray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 10px;
}
#menuBar router-link {
    margin-left: 15px;
    margin-right: 15px;
    text-align: center;
}
#nav a {
    color:rgba(0,0,0,.5);
    text-decoration: none;
    margin-left: 15px;
    margin-right: 15px;
}
#nav a.router-link-exact-active {
    color: black;
}
#nav a:hover {
    color: #2f2f2f;
}

</style>