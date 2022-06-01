const router = require("express").router();

const {
  createUser,
  getSingleUser,
  saveRecipe,
  deleteRecipe,
  login,
} = require("../../controllers/user-contoller");
const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createUser).put(authMiddleware, saveRecipe);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

router.route("/recipes/:recipeId").delete(authMiddleware, deleteRecipe);

module.exports = router;
