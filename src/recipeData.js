let mock = { 
    Breakfast: [
        {
            name: "Crepes a la Ashley",
            description: "My family tradition has always been to break our fast with crepes and for some reason my sister Ashley was the lucky one and got her name in our recipe title.  Crepes have always had a special place in my heart because of this and thankfully Zach doesn't mind continuing the tradition.  We always served it with strawberry danish dessert, whipped cream, eggs, bacon, and orange juice.  Since dating Zach, I have tried to make more savory crepes as well.",
            servings: "Many",
            time: "1-2 hours",
            ingredients:["1 1/2 cups flour",
                        "1 tablespoon sugar",
                        "1/2 teaspoon baking powder",
                        "1/2 teaspoon salt",
                        "2 cups milk",
                        "2 eggs",
                        "2 tablespoons margarine or butter, melted",
                        "1/4 teaspoon vanilla",
                        "*If using self-rising flour, omit baking powder and salt."],
            directions: ["Mix flour, sugar, baking powder and salt. Stir in remaining ingredients. Beat until smooth in blender.",
                "Lightly butter 6 to 8 inch skillet; heat over medium heat until bubbly.",
                "Pour scant 1/4 cup of the batter into skillet; immediately rotate skillet until thin film covers bottom.",
                "Cook until light brown. Run wide spatula around edge to loosen; turn and cook other side until light brown.",
                "Stack crepes, placing waxed paper between each. Keep covered. Makes 12 crepes.",
                "If desired, thinly spread applesauce, sweetened strawberries, currant jelly, or raspberry jam on warm crepes; roll up. (Be sure to fill crepes to the more attractive side is on the outside.) Sprinkle with powdered sugar."],
            image: "crepe.jpg"
        },
        {
            name: "Buttermilk Syrup",
            description: "This is one is an all time favorite. Anything else is subpar to me at this point.  There is something about the vanilla smell and the delicious flavor of this recipe.  Just don't overcook or you'll make yourself some carmel! - recipe from Sherilynn Mertlich and Aunt Donna",
            servings: "15+ pancakes",
            time: "5 minutes",
            ingredients:["1/2 cup sugar",
                        "1/4 cup butter",
                        "1/4 cup buttermilk",
                        "1 tsp vanilla",
                        "1/4 tsp baking soda"],
            directions: ["Add the baking soda after boiling the other ingredients for one minute"],
            image: "syrup.jpg"
        }
    ],
    Dinner: [
        {
            name: "Brussel Sprouts and Sweet Potatos",
            description: "This was me one day trying to find something around the house to make for when Zach got home.  I got a little inspiration from pinterest, but most of this was my intuition and I'm pretty proud of it! That being said, I'm not sure about the measurments",
            servings: "4",
            time: "1 hour",
            ingredients:["1 sweet potato",
                        "1 bag of brussel sprouts",
                        "1 tsp garlic powder",
                        "1 tsp parsley",
                        "1 tsp chimes",
                        "Vegetable oil",
                        "Seasame seed oil"],
            directions: ["Preheat over to 400 F", 
                "Peel and dice sweet potato, clean and halve brussel sprouts",
                "Pour some oil in the bottom of a clear baking dish and pour in the vegetables",
                "Season with the spices and pour over some seasame seed oil",
                "Bake in for about 40 minutes or until vegetables are soft"],
            image: "brussels.jpg"
        },
        {
            name: "Creamy White Chicken Chili",
            description: "My mom has said that though this looks like such an unappetizing looking soup, it sure is good!",
            servings: "8",
            time: "1 hour",
            ingredients:["1 tablespoon oil",
                        "1 pound boneless, skinless chicken breasts, cut into 1/2-inch pieces (leave whole for slow cooker method)",
                        "1 medium onion, chopped (about 1/2 cup)",
                        "1 1/2 teaspoons garlic powder or 2 cloves fresh garlic, finely minced",
                        "2 cans (15 1/2 ounces each) Great Northern Beans, rinsed and drained",
                        "1 can (14 1/2 ounces) chicken broth (about 1 3/4 cups)",
                        "2 cans (4 ounces each) chopped green chiles",
                        "1 teaspoon salt",
                        "1 teaspoon ground cumin",
                        "1 teaspoon dried oregano",
                        "1/2 teaspoon pepper",
                        "1/4 teaspoon cayenne pepper",
                        "1 cup sour cream",
                        "1/2 cup whipping cream (optional)",
                        "Fresh cilantro, for garnish (optional)",
                        "Shredded cheese, tortilla chips, other toppings (optional)"],
            directions: ["Slow Cooker Directions: In a 5- or 6-quart slow cooker, place 1 pound boneless, skinless chicken breasts whole (without cutting into pieces).",
                        "Add the chopped onion, garlic powder, beans, green chiles and all of the spices. Do not add the sour cream or whipping cream yet!",
                        "Reduce the chicken broth to 12 ounces (about 1 1/2 cups) and pour in over the other ingredients. Stir the mixture around a bit to incorporate the dry spices. Cook on low for 5-7 hours.",
                        "Remove the chicken to a cutting board and shred in bite-size pieces (or use a couple forks and shred right in the slow cooker). Add the shredded chicken back into the slow cooker.",
                        "In a small bowl or liquid measuring cup, whisk together the sour cream and whipping cream until smooth. Whisk the cream mixture into the crockpot with the other ingredients. Let the chili cook warm through on low temperature. Serve."],
            image: "chili.jpg"
        }
    ],
    Deserts: [
        {
            name: "Cookie Butter Milkshake",
            description: "I'm already a sucker for milkshakes.  Something to do with my dad always making them whenever we'd have guests over.  This is just a fantastic recipe we discovered recently.  Zach described it as a 'liquid snickerdoodle'!",
            servings: "4",
            time: "5 minutes",
            ingredients:["4 cups vanilla ice cream",
                        "1 1/2 cups milk",
                        "1 tsp cinnamon",
                        "Cookie butter"],
            directions: ["Combine ingredients and blend!"],
            image: "cookiebutter.jpg"
        }
    ],
    Misc: [
        {
            name: "Renee's Bread",
            description: "This is Renee's famous bread recipe.  My sister Katie told me to never learn it because if I did,I would most definately gain weight!  Renee got us the 6 quart kitchen aid as a wedding gift, just in case we needed to bake more than 4 loaves at a time.  After baking this, I now understand why we halfed the recipe and our three loaves lasted about 2 days!  Fantastic recipe.",
            servings: "4 Loaves",
            time: "3-4 hours",
            ingredients:["6 cups of warm water or milk",
                        "2/3 cups of oil or up to 1 cup of melted butter",
                        "2/3 cups of honey or up to 1 cup of sugar",
                        "1/3 cup of dough conditioner or enhanced (I prefer honeyville grain)",
                        "2 tablespoons of salt",
                        "4 eggs (optional)",
                        "16 cups (2164 grams) of flour",
                        "2-4 tablespoons of yeast"],
            directions: ["Adding the flour last, combine ingredients together in a large bowl",
                "Knead dough until thoroughly mixed.  Continue to add flour if still sticky",
                "Leave dough in a warm place with a cloth over the top. Let rise for 1-2 hours",
                "Bake in convection oven on 325 for about 35 minutes"],
            image: "bread.png"
        }
    ]
}

export default mock;