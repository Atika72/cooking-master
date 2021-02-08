const searchFoods = () => {
    const food = document.getElementById("search-box").value;
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayFoods(data.meals));
} 

const displayFoods = foods => {
    const divFoods = document.getElementById('foods');

    foods.forEach(food => {
        const divFood = document.createElement('div');

        divFood.className = 'food';
        const foodInfo = `
        <div id="showIngredients">
        <img class="image" src = ${food.strMealThumb}>
        <h3 class="food-name">${food.strMeal}</h3>
        </div>
        <p id="ingredients">${food.strInstructions}<p>
        
        `
        divFood.innerHTML = foodInfo;
        divFoods.appendChild(divFood);

        
const ingredientList = document.getElementById("showIngredients");
        ingredientList.addEventListener("click", (){
            const showList = document.getElementById("ingredients");
        }) 
    }
    
       
)}



// const displayRecipe= (ingredients) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredients}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.strInstructions))
// }


// const displayFoodInstruction = meals => {
//     console.log(meals);
// }
//  <button onclick="displayFoodInstruction('${food.strInstructions}')"> Details </button>


// const ingredientList = document.getElementById("showIngredients");
//         ingredientList.addEventListener("click", (){
//             const showList = document.getElementById("ingredients");
//         }) 

//          