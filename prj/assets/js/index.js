import { Ingredients } from './classes/ingredients.js';
window.addEventListener("DOMContentLoaded", function(){
    
    let bacon = new Ingredients("bacon","assets/img/bacon.png");
    let carrots = new Ingredients("carrots","assets/img/carrots.png");
    let cheese = new Ingredients("cheese","assets/img/cheese.png");
    let egg = new Ingredients("egg","assets/img/egg.png");
    let eggplant = new Ingredients("eggplant","assets/img/eggplant.png");
    let goat_cheese = new Ingredients("goat_cheese","assets/img/goat-cheese.png");
    let honey = new Ingredients("honey","assets/img/honey.png");
    let mushroom = new Ingredients("mushroom","assets/img/mushroom.png");
    let olive = new Ingredients("olive","assets/img/olive.png");
    let pepper = new Ingredients("pepper","assets/img/pepper.png");
    let potato = new Ingredients("potato","assets/img/potato.png");
    let tomato = new Ingredients("tomato","assets/img/tomato.png");
    
let availableIngredients = [];

availableIngredients.push(bacon);
availableIngredients.push(carrots);
availableIngredients.push(cheese);
availableIngredients.push(egg);
availableIngredients.push(eggplant);
availableIngredients.push(goat_cheese);
availableIngredients.push(honey);
availableIngredients.push(mushroom);
availableIngredients.push(olive);
availableIngredients.push(pepper);
availableIngredients.push(potato);
availableIngredients.push(tomato);


    console.log(availableIngredients);

    
});