const db = require('../data/db-config')

module.exports ={
    findRecipes,
    findRecipesById,
    addIngrediants,
    addRecipes,
    updateRecipe,
    removeRecipe,
    findIngrdients,
}

function findRecipes(){
    return db("recipes");
}

function findRecipesById(id){
    return db('recipes').where({id}).first()
}

function findIngrdients (){
    return db("ingredients");
}

function findIngrById(id){
    return db('ingredients').where({id}).first()
}

function addIngrediants (ingredient) {
    return db("ingredients").insert(ingredient)
        .then(id =>{
            return findIngrById(id[0]);
        })
}

function addRecipes (recipe) {
    return db("recipes").insert(recipe)
        .then(id =>{
            return findRecipesById(id[0]);
        })
}

function updateRecipe(changedRecipe, id) {
    return db('recipes')
      .where({ id })
      .update(changedRecipe);
}

function removeRecipe(id) {
    return db('recipes')
        .where('id', id)
        .del();
}