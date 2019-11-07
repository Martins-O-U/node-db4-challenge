
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: "Afang Soup" },
        {id: 2, recipe_name: "Nigerian Jollof"},
        {id: 3, recipe_name: "Grilled chicken"}
      ]);
    });
};
