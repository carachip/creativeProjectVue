<template>
  <div class="home">
    <div id="body">
      <div id="navigation">
          Home
      </div>
      <div id="pageInfo">
          <div class="subheadings">A Website for our Favorite Recipes</div>
          <div id="descriptionBox">
              <p>
                  Welcome to Zacharie and my recipe website!  Here we plan to keep our favorite recipes from our parents, pinterest,
                  or whatever Zach comes up with! I have always loved to cook, but have never spent much time doing it.  Many of our
                  generous wedding gifts were kitchen equipment and we have been doing our best to put them to good use!

                  And though my mom hates even the thought of cgi rats in the kitchen, Zacharie and I love the movie Ratatouille, 
                  thus our inspiration for the name of the site.
              </p>
          </div>
      </div>
    </div>
    <footer>
        <a id="footer" href="https://github.com/carachip/creativeProject.git">https://github.com/carachip/creativeProject.git</a>
    </footer>
  </div>
</template>

<style>
#body {
    margin: auto;
    width: 70%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#navigation {
    color: gray;
    margin-top: 30px;
    margin-bottom: 30px;
}
#pageInfo {
    background-color: lightsteelblue;
    padding: 40px;
}
#pageInfo h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 3em;
    margin-top: 0;
}
.subheadings {
    font-family: 'Amatic SC', cursive;
    font-size: 2em;
    font-weight: bold;
    text-decoration: underline;
}
#descriptionBox {
    margin: 40px;
}
footer {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1em;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    margin-top: 1em;
    margin-bottom: 2em;
}
@media (max-width: 800px) {
    #pageInfo {
        padding: 20px;
    }
    #descriptionBox {
        margin: 15px;
    }
    #body {
        width: 90%;
    }
    footer {
        width: 90%;
        word-wrap: break-word;
    }
}
</style>
