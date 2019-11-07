const db = require('../data/db-config')

module.exports ={
    findRecipes,
    findRecipesById,
    addIngrediants,
    addRecipes,
    updateRecipe,
    removeRecipe,
    findIngrdients,
    getShoppingList,
    getInstructions,
    getIngredientWithRecipes
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

function getShoppingList (id) {
    return db("recipes_ingredients")
        .join("ingredients", "ingredients.id", "recipes_ingredients.ingredient_id")
        .where({recipe_id: id})
        .select("ingredients.ingredient", "recipes_ingredients.quantity")
}

function getInstructions (id) {
    return db("instructions").where({recipe_id: id})
        .orderBy("instructions.step_number")
}

function getIngredientWithRecipes (id) {
    return db("recipes_ingredients")
        .join("ingredients", "ingredients.id", "recipes_ingredients.ingredient_id")
        .join("recipes", "recipes.id", "recipes_ingredients.recipe_id")
        .where({ingredient_id: id})
        .select("ingredients.ingredient", "recipes.recipe_name")
}