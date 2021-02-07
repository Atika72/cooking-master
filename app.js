const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    showMeal()
})

function showMeal() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${'food'}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals));

    const displayFoods = foods => {
        const divFoods = document.getElementById('foods');

        foods.forEach(food => {
            const divFood = document.createElement('div');

            divFood.className = 'food';
            const foodInfo = `
            <img class="image" src = ${food.strMealThumb}>
            <h3 class="food-name">${food.strMeal}</h3>
            <button onclick="displayFoodInstruction('${food.strInstructions}')"> Details </button>
            `
            divFood.innerHTML = foodInfo;
            divFoods.appendChild(divFood);
        });
    }

    const displayFoodInstruction = instruction => {
        console.log(instruction);
    }

}



// const apiKey = '1';
// fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
// .then(res => res.json())
// .then(data => displayFoods(data.meals));

// const displayFoods = foods => {
//     const divFoods = document.getElementById('foods');

//     foods.forEach(food => {
//         const divFood = document.createElement('div');

//         divFood.className = 'food';
//         const foodInfo = `

//             <img class="image" src = ${food.strMealThumb}>
//             <h3 class="food-name">${food.strMeal}</h3>
//             <button onclick="displayFoodInstruction('${food.strInstructions}')"> Details </button>
//         `
//         divFood.innerHTML = foodInfo;
//         divFoods.appendChild(divFood);
//     });
// }

// const displayFoodInstruction = instruction => {
//     console.log(instruction);
// }

