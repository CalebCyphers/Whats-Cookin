// import './css/base.scss';
// import './css/styles.scss';

// import recipeData from './data/recipes';
// import ingredientData from './data/ingredients';
// import users from './data/users';

// import Pantry from './pantry';
// import Recipe from './recipe';
// import User from './user';
// import Cookbook from './cookbook';
// import domUpdates from './domUpdates';

let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
const recipeCards = document.querySelector('.all-cards');
let pantryArea = document.querySelector('.pantry-cards');
// let cookbook = new Cookbook(recipeData);
let user, pantry;

// window.onload = onStartup();
// window.onload = showDomUpdates(recipe);
window.onload = function() {
  domUpdates.grabRecipes()
  // domUpdates.grabUsers()
  domUpdates.mergeFetchTimelines()
}
// homeButton.addEventListener('click', cardButtonConditionals);
// favButton.addEventListener('click', viewFavorites);
// cardArea.addEventListener('click', cardButtonConditionals);

function displayAllRecipes(recipe) {
  if (recipeCards === null) {
    return 
  }
  recipeCards.innerHTML += `<article class="single-recipe-card">
       <article class="all-card-icons">
         <img class="plus-icon card-icon" src="./images/plus-icon.png" alt="plus icon used to expand and show recipe details">
         <img class="heart-icon card-icon" src="./images/heart-icon.png" alt="empty heart icon used to favorite and unfavorite recipes">
       </article>
       <article class="card-image-section">
         <img class="card-image" src="${recipe.image}" alt="sample display of recipe">
       </article>
       <article class="recipe-name-area">
         <h2 class="recipe-name">${recipe.name}</h2>
       </article>
     </article>`
}

function onStartup(user) {
  greetUser(user);
  displayPantry(pantry)
}


// function displayPantry(pantry) {
// ///change innerHtml on pantry
// }
// function viewFavorites() {
//   if (cardArea.classList.contains('all')) {
//     cardArea.classList.remove('all')
//   }
//   if (!user.favoriteRecipes.length) {
//     favButton.innerHTML = 'You have no favorites!';
//     populateCards(cookbook.recipes);
//     return
//   } else {
//     favButton.innerHTML = 'Refresh Favorites'
//     cardArea.innerHTML = '';
//     user.favoriteRecipes.forEach(recipe => {
//       cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
//       class='card'>
//       <header id='${recipe.id}' class='card-header'>
//       <label for='add-button' class='hidden'>Click to add recipe</label>
//       <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
//       <img id='${recipe.id}' class='add'
//       src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
//       recipes to cook'></button>
//       <label for='favorite-button' class='hidden'>Click to favorite recipe
//       </label>
//       <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite-active card-button'>
//       </button></header>
//       <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
//       <img id='${recipe.id}' tabindex='0' class='card-picture'
//       src='${recipe.image}' alt='Food from recipe'>
//       </div>`)
//     })
//   }
// }

function greetUser(user) {
  const userName = document.querySelector('.user-name');
  if(userName === null){
    return 
  }
  userName.innerText += ' ' + user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
}

function displayPantry(pantry) {
  if(pantryArea === null){
    return 
  }
  pantryArea.innerHTML = ''
  pantry.forEach(ingInPantry => {
    pantryArea.innerHTML += `<article class="single-ingredient-card">
  <article class="ingredient-name-area">
    <h2 class="ingredient-name">${ingInPantry.name}</h2>
  </article>
  <article class="ingredient-quantity-section">
    <button>-</button>
    <p class = 'ingredient-quantity'>${ingInPantry.amount}</p>
    <button>+</button>
  </article>
</article>`
  })
}

// function favoriteCard(event) {
//   let specificRecipe = cookbook.recipes.find(recipe => {
//     if (recipe.id  === Number(event.target.id)) {
//       return recipe;
//     }
//   })
//   if (!event.target.classList.contains('favorite-active')) {
//     event.target.classList.add('favorite-active');
//     favButton.innerHTML = 'View Favorites';
//     user.addToFavorites(specificRecipe);
//   } else if (event.target.classList.contains('favorite-active')) {
//     event.target.classList.remove('favorite-active');
//     user.removeFromFavorites(specificRecipe)
//   }
// }

// function cardButtonConditionals(event) {
//   if (event.target.classList.contains('favorite')) {
//     favoriteCard(event);
//   } else if (event.target.classList.contains('card-picture')) {
//     displayDirections(event);
//   } else if (event.target.classList.contains('home')) {
//     favButton.innerHTML = 'View Favorites';
//     populateCards(cookbook.recipes);
//   }
// }


// function displayDirections(event) {
//   let newRecipeInfo = cookbook.recipes.find(recipe => {
//     if (recipe.id === Number(event.target.id)) {
//       return recipe;
//     }
//   })
//   let recipeObject = new Recipe(newRecipeInfo, ingredientsData);
//   let cost = recipeObject.calculateCost()
//   let costInDollars = (cost / 100).toFixed(2)
//   cardArea.classList.add('all');
//   cardArea.innerHTML = `<h3>${recipeObject.name}</h3>
//   <p class='all-recipe-info'>
//   <strong>It will cost: </strong><span class='cost recipe-info'>
//   $${costInDollars}</span><br><br>
//   <strong>You will need: </strong><span class='ingredients recipe-info'></span>
//   <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
//   </span></ol>
//   </p>`;
//   let ingredientsSpan = document.querySelector('.ingredients');
//   let instructionsSpan = document.querySelector('.instructions');
//   recipeObject.ingredients.forEach(ingredient => {
//     ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
//     ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
//     ${ingredient.name}</li></ul>
//     `)
//   })
//   recipeObject.instructions.forEach(instruction => {
//     instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
//     ${instruction.instruction}</li>
//     `)
//   })
// }

// function getFavorites() {
//   if (user.favoriteRecipes.length) {
//     user.favoriteRecipes.forEach(recipe => {
//       document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
//     })
//   } else return
// }

// function populateCards(recipes) {
//   cardArea.innerHTML = '';
//   if (cardArea.classList.contains('all')) {
//     cardArea.classList.remove('all')
//   }
//   recipes.forEach(recipe => {
//     cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
//     class='card'>
//         <header id='${recipe.id}' class='card-header'>
//           <label for='add-button' class='hidden'>Click to add recipe</label>
//           <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
//             <img id='${recipe.id} favorite' class='add'
//             src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
//             recipes to cook'>
//           </button>
//           <label for='favorite-button' class='hidden'>Click to favorite recipe
//           </label>
//           <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
//         </header>
//           <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
//           <img id='${recipe.id}' tabindex='0' class='card-picture'
//           src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
//     </div>`)
//   })
//   getFavorites();
// };
