
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
        // Inserts seed entries
        return knex('ingredients').insert([
          {id: 1, ingredient: 'Rice'},
          {id: 2, ingredient: 'Vegetable Oil'},
          {id: 3, ingredient: 'Crayfish'}, 
          {id: 4, ingredient: 'Onions'},
          {id: 5, ingredient: "Palm Oil"},
          {id: 6, ingredient: "Ukazi Leaf"},
          {id: 7, ingredient: "Chicken"},
          {id: 8, ingredient: "Cat Fish"},
          {id: 9, ingredient: "Species"}

        ]);
    });
};
