const express = require("express");
const router = express.Router();
const db = require("./recipe-helper");


router.get("/recipe", (req, res) => {
    db.findRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json({message: "You're on your own on your shopping list, pal " + error.message})
    })
})

router.get("/ingredients", (req, res) => {
    db.findIngrdients()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json({message: "You're on your own on your shopping list, pal " + error.message})
    })
})

router.get('/recipe/:id', (req, res) => {
    const { id } = req.params;
  
    db.findRecipesById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find any recipe with given id.' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get recipe ' + error.message });
    });
});

router.post('/recipe', (req, res) => {
    const recipeData = req.body;
  
    db.addRecipes(recipeData)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch (error => {
      res.status(500).json({ message: 'Failed to create new recipe ' + error.message });
    });
  });

  router.post('/ingredients', (req, res) => {
    const ingredientData = req.body;
  
    db.addIngrediants(ingredientData)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch (error => {
      res.status(500).json({ message: 'Failed to add new ingredient ' + error.message });
    });
});

router.get('/recipe/:id/shoppinglist', (req, res) => {
    db.getShoppingList(req.params.id)
     .then(list => {
         if(list.length > 0){
             res.status(200).json(list)
         }else{
             res.json({message: "A shopping List with that 'RECIPE ID' does not exist"})
         }
     })
     .catch(error => {
         res.status(500).json({message: "Something went wrong:-  " + error.message})
     })
 })

router.get("/recipe/:id/instructions", (req, res) => {
    db.getInstructions(req.params.id)
        .then(step => {
            if(step.length > 0){
                res.status(200).json(step)
            }else{
                res.json({message: "An instruction with that 'RECIPE ID' does not exist"})
            }        })
        .catch(error => {
            res.status(500).json({ message: "Failed to get the instruction:-" + error.message})
        })
})


router.get("/ingredients/:id/recipes", (req, res) => {
    db.getIngredientWithRecipes(req.params.id)
        .then(data => {
            if(data.length > 0){
                res.status(200).json(data)
            }else{
                res.json({message: "An ingrdient with that ID does not exist"})
            }        })
        .catch(error => {
            res.status(500).json({ message: "Failed to get the instruction:-" + error.message})
        })
})

router.get('/', (req, res) =>{
    res.json('This is the defauls zone, specify what you need to get')
})

module.exports = router; 