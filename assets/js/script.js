var userFormEl = document.querySelector("#user-form");
var searchFormEl = document.querySelector("#search-form");
var recipeContainerEl = document.querySelector("recipe-container");
var result = document.querySelector("recipe-result"); 

var searchBtn = document.querySelector("search-btn");



var getRecipe = function(recipe) {
    var apiUrl = ("https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe)

    // make request to api
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            // displayMeal(data, meals);
            let myMeal = data.meals[0]; 
            console.log(myMeal);
            console.log(myMeal.strMealThumb);
            console.log(myMeal.strMeal);
            console.log(myMeal.strArea);
            console.log(myMeal.strCategory);
            console.log(myMeal.strInstructions);
            let count = 1;
            let ingredients = [];
            for (let i in myMeal) {
                let ingredient = "";
                let measure = "";
                if (i.startsWith("strIngredient") && myMeal[i]) {
                    ingredient = myMeal[i];
                    measure = myMeal["strMeasure" + count];
                    count += 1;
                    ingredients.push(`${measure} ${ingredient}`); 
                }
            }
            console.log(ingredients);
        });
    });
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    // getting value from input element 
    var searchedRecipe = searchFormEl.value.trim();

    if (searchedRecipe) {
        getRecipe(searchedRecipe);
        searchFormEl.value="";
    } else {
        alert("Please enter a correct recipe search.")
    }
};

var displayMeal = function(meals, searchTerm) {
    // check to see if there are any recipes
    console.log(meals);
    console.log(searchTerm);
    // probable for loop to go through all of the different meals 

    // create element for recipe name and image
    // create element for ingredients/measurements
    // create element for recipe
    // append everything 
}

userFormEl.addEventListener("submit", formSubmitHandler);