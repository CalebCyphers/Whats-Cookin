
const recipeCards = document.querySelector('.all-cards');
let recipeDisplay = document.querySelector('.recipe-display');

let domUpdates = {
  randomNumber: Math.floor(Math.random() * 49) + 1,

   displayAllRecipes(recipes, currentUser) {
    let favorites = currentUser.favoriteRecipes;
    recipeCards.innerHTML = '';
    recipes.forEach(recipe => {
      let src = "https://image.flaticon.com/icons/svg/149/149222.svg"
      if (favorites !== undefined && favorites.includes(String(recipe.id) )) {
        src = "https://image.flaticon.com/icons/svg/148/148841.svg";
      }
      recipeCards.innerHTML += `<article id = ${recipe.id} class="single-recipe-card ">
         <article class="all-card-icons">
           <img class="plus-icon card-icon" tabindex="0" src="./images/plus-icon.png" alt="show recipe details button">
           <img class="star-icon card-icon" tabindex="0" src=${src} alt="add to favorites button">
         </article>
         <article class="card-image-section">
           <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}">
         </article>
         <article class="recipe-name-area">
           <h2 class="recipe-name" tabindex="0">${recipe.name}</h2>
         </article>
       </article>`
    })
  },

  displayRecipeInfo(recipe, cookables, missingIng) {
    let cookable; 
    let isRecipeCookable = cookables.find(cookableRecipe =>{
      return recipe.name === cookableRecipe.name
    }) !== undefined; 
    if (isRecipeCookable) {
      cookable = 'You can cook this recipe!';
    } else {
      cookable = `Can't cook this recipe! <br>
      You are missing: <br>${this.formatObjectsToDisplatCorrectly((this.figureMissing(recipe, missingIng)))}`; 
    }
    let trueInstructions = recipe.instructions.map(instruction => {
      return instruction.instruction;
    }).join('<br>');
    recipeDisplay.innerHTML = '';
    recipeDisplay.innerHTML += 
    `<section class="recipe-display-main">
    <h1>${cookable}</h1>
    <h1>${recipe.name}</h1>
    <div class="recipe-ingredients-with-cost">
    <h2>Necessary Ingredients</h2>
      <p class="popup-ingredients">${this.formatObjectsToDisplatCorrectly((recipe.ingredients))}</p>
      <h3 class="pop-costs">Costs ${recipe.calculateCost()} dollars to make </h3>
    </div>
    <p class="recipe-instructions">${trueInstructions}</p>
</section>`;
  },

  showRecipePopup() {
    recipeDisplay.classList.remove('hidden');
  },

  hideRecipePopup() {
    recipeDisplay.classList.add('hidden');
  },
  
  greetUser(user) {
    const userName = document.querySelector('.user-name');
    if (userName === null) {
      return 
    }
    userName.innerText += ' ' + user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  },
  
  displayPantry(pantry) {
    pantry = pantry.contents
    recipeCards.innerHTML = ''
    pantry.forEach(ingInPantry => {
      recipeCards.innerHTML += `<article class="single-ingredient-card">
    <article class="ingredient-name-area">
      <h2 class="ingredient-name" tabindex="0">${ingInPantry.name}</h2>
    </article>
    <article class="ingredient-quantity-section">
      <button alt="decrement ingredient quantity button">-</button>
      <p class = 'ingredient-quantity' tabindex="0">${ingInPantry.amount}</p>
      <button alt="incriment ingredient quantity button">+</button>
    </article>
  </article>`
    });
  },

    displayUpcomingRecipes(currentUser, recipeDatas) {
      if (currentUser.recipesToCook.length === 0) {
        return 
      }
      if (event.target.classList.contains('menu-my-upcoming-recipes-title')) {
        recipeCards.innerHTML = ''
      recipeDatas.forEach(recipeDataPoint => {
        let favorites = currentUser.favoriteRecipes
        let src = "https://image.flaticon.com/icons/svg/149/149222.svg"
      if (favorites !== undefined && favorites.includes(String(recipeDataPoint.id) )) {
        src = "https://image.flaticon.com/icons/svg/148/148841.svg"
     }
        if (currentUser.recipesToCook.includes(String(recipeDataPoint.id))) {
          recipeCards.innerHTML += `<article id = ${recipeDataPoint.id} class="single-recipe-card ">
          <article class="all-card-icons">
            <img class="plus-icon card-icon" tabindex="0" src="./images/plus-icon.png" alt="show recipe details">
            <img class="star-icon card-icon" tabindex="0" src=${src} alt="add to favorites button">
          </article>
          <article class="card-image-section">
            <img class="card-image" tabindex="0" src="${recipeDataPoint.image}" alt="sample display of recipe">
          </article>
          <article class="recipe-name-area">
            <h2 class="recipe-name" tabindex="0">${recipeDataPoint.name}</h2>
          </article>
        </article>`
        }
      })
    }
  },

  displayFavorites(favorites) {
    if (favorites.length === 0 ) {
      return;
    }
    recipeCards.innerHTML = ''
    favorites.forEach(recipe =>{
      recipeCards.innerHTML += `<article id = ${recipe.id} class="single-recipe-card ">
      <article class="all-card-icons">
        <img class="plus-icon card-icon" tabindex="0" src="./images/plus-icon.png" alt="show recipe details button">
        <img class="star-icon card-icon" tabindex="0" src="https://image.flaticon.com/icons/svg/148/148841.svg" alt="add to favorites button">
      </article>
      <article class="card-image-section">
        <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}">
      </article>
      <article class="recipe-name-area">
        <h2 class="recipe-name" tabindex="0">${recipe.name}</h2>
      </article>
    </article>`
    })
  },

  figureMissing(recipe, missingIng) {
    let correctRecipe = missingIng.find(rep =>{
      return recipe.name === rep.name;
    }) 
    return correctRecipe.NotEnough;
  },

  formatObjectsToDisplatCorrectly(obj) {
    return obj.reduce((acc, curr) => {
      return acc += `${curr.quantity.amount} ${curr.quantity.unit} ${curr.name} <br>`;
    }, '')
  }
}

export default domUpdates;
