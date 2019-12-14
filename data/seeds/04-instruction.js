
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 2, step_number: 2, recipe_id: 1, instruction: "How about checking out other cook books"},
        {id: 3, step_number: 3, recipe_id: 1, instruction: "Put them all in the pot on the fire, it just doesnt matter"},
        {id: 4, step_number: 1, recipe_id: 1, instruction: "How about checking out other cook books"},
        {id: 1, step_number: 1, recipe_id: 2, instruction: "How about checking out other cook books"},
        {id: 5, step_number: 2, recipe_id: 2, instruction: "How about checking out other cook books"},
        {id: 6, step_number: 3, recipe_id: 2, instruction: "what you are looking for isn't here"},
        {id: 7, step_number: 1, recipe_id: 3, instruction: "I will get back to you on this"},
        {id: 8, step_number: 2, recipe_id: 3, instruction: "How about checking out other cook books"},
        {id: 9, step_number: 3, recipe_id: 3, instruction: "How about checking out other cook books"}            

      ]);
    });
};
