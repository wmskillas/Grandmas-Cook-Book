const router = require("express").Router();

const {
  getRecipes,
  createRecipe,
  getSingleRecipe,
  updateRecipe,
  deleteRecipe,
  addReaction,
  removeReaction,
} = require("../../controllers/breakfast-controller");

router.route("/").get(getRecipes).post(createRecipe);

router
  .route("/:recipeId")
  .get(getSingleRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe);

router
  .route("/:recipeId/reactions/:reactionId")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
