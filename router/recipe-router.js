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

router.get('/', (req, res) =>{
    res.json('This is the defauls zone, specify what you need to get')
})

module.exports = router; 