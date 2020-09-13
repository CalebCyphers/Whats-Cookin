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
let favorites = []
let recipeData;
let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
const recipeCards = document.querySelector('.all-cards');
let pantryArea = document.querySelector('.pantry-cards');
// let cookbook = new Cookbook(recipeData);
favButton.addEventListener('click', ()=>{
  if(!favButton.classList.contains('clicked')){
  domUpdates.displayFavorites(findFavorites(favorites,recipeData))
  favButton.classList.add('clicked')
  }
  else{
    favButton.classList.remove('clicked')
    displayAllRecipes(recipeData)
  }
})
let user, pantry;


recipeCards.addEventListener('click', () => {
if(event.target.classList.contains('star-icon')){
  toogleFavorites(event)
}
})
function toogleFavorites(event){
  if(event.target.src === "https://image.flaticon.com/icons/svg/149/149222.svg"){
    event.target.src =   "https://image.flaticon.com/icons/svg/148/148841.svg"
    addToFavorites(event)
    console.log(favorites)
  }else{   
    removeFromFavorites(event)
    event.target.src =  "https://image.flaticon.com/icons/svg/149/149222.svg" }
}
function addToFavorites(event){
let recipe = event.target.closest('.single-recipe-card')
favorites.push(recipe.id)
console.log(favorites)
}
function removeFromFavorites(event) {
  let recipe = event.target.closest('.single-recipe-card')
  if(favorites.includes(recipe.id)){
    favorites.splice(favorites.indexOf(recipe.id),1)
  }
}

// window.onload = onStartup();
// window.onload = showDomUpdates(recipe);
window.onload = function() {
 grabRecipes()
  //grabUsers()
  mergeFetchTimelines()
}
function createUser(usersData) {
  let currentUser = usersData.find(user => {
    let parsedID = parseInt(user.id);
    console.log(domUpdates.randomNumber)
    return parsedID === domUpdates.randomNumber
  })
  return new User(currentUser.id,currentUser.name,currentUser.pantry)
}

function createPantry(currentUser, ingredientsData) {
  currentUser.pantry.forEach(pantryItem => {
    let currentIngredient = ingredientsData.find(ingredient => {
      return pantryItem.ingredient === ingredient.id;
    })
    if(!pantryItem.name){
      return
    }
     pantryItem.name = currentIngredient.name;
    pantryItem.estimatedCostInCents = currentIngredient.estimatedCostInCents;
  })
  //what if we made a class here?
  return new Pantry(currentUser.pantry)
}
function grabRecipes() {
  fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
  .then(response => response.json())
  .then(recipeObject => {
    recipeData = recipeObject.recipeData
      domUpdates.displayAllRecipes(recipeData);
  })
  .catch(err => {
    console.log(err);
    alert('Sorry, the recipes failed to load. Try again later.')})
}

function grabUsers() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData',)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(domUpdates.randomNumber)
    domUpdates.greetUser(data.wcUsersData[domUpdates.randomNumber -1])
     return data.wcUsersData;
      })
  .catch(err => {
      console.log(err);
      alert('Sorry, the user information failed to load. Try again later.');
  })
}
  function grabIngredients() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
  .then(response => {
      return response.json()
  }).then(ingredientData => {
      return ingredientData.ingredientsData;
      })
  .catch(err => {
      console.log(err);
      alert('Sorry, the ingredients failed to load. Try again later.');    
})
}
function mergeFetchTimelines() {
 Promise.all([grabUsers(), grabIngredients()])
 .then(values => {
   let usersData = values[0]
   let ingredientsData = values[1]
   let currentUser = createUser(usersData)
   let pantry = createPantry(currentUser,ingredientsData)
      domUpdates.displayPantry(pantry)
 })
  .catch(err => {
      console.log(err);
      alert('Sorry, the information failed to load. Try again later.');
  })
  
}
function findFavorites(ids,recipeData) {
 
  favoriteRecipies = recipeData.filter(recipe =>{
    return ids.includes(String(recipe.id))
  })
  console.log(favoriteRecipies)
  return favoriteRecipies
}



