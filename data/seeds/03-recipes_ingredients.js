
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 8, quantity: "1 kilo" },
        {id: 2, recipe_id: 1, ingredient_id: 6, quantity: "1 stalks" },
        {id: 3, recipe_id: 1, ingredient_id: 3, quantity: "1/2 cup" },
        {id: 4, recipe_id: 2, ingredient_id: 1, quantity: "3 cups" },
        {id: 5, recipe_id: 2, ingredient_id: 2, quantity: "small measure" },
        {id: 6, recipe_id: 2, ingredient_id: 9, quantity: "to taste" },
        {id: 7, recipe_id: 2, ingredient_id: 3, quantity: "1/3 cup" },
        {id: 8, recipe_id: 3, ingredient_id: 4, quantity: "1 big sized"},
        {id: 9, recipe_id: 3, ingredient_id: 9, quantity: "to taste"}
      ]);
    });
};
