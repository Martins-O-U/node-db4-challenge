
exports.up = function(knex) {
    return knex.schema.createTable("ingredients", table => {
        table.increments();
        table.string("ingredient", 255);
    })
      .createTable("recipes", table => {
        table.increments();
        table.string("recipe_name", 255)
  
      })
      .createTable("recipes_ingredients", table => {
          table.increments();
          table.integer("recipe_id")
              .unsigned()
              .notNullable()
              .references("id")
              .inTable("recipes");
          table.integer("ingredient_id")
              .unsigned()
              .notNullable()
              .references("id")
              .inTable("ingredients");
        table.string("quantity", 150);
      })
      .createTable("instructions", table => {
        table.increments();
        table.integer("step_number", 3).notNullable();
        table.integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
        table.string("instruction", 800).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('combinations')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients') 
};
