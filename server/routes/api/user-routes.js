const router = require("express").router();

const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  saveRecipe,
  deleteRecipe,
  login,
} = require("../../controllers/user-controller");
const { authMiddleware } = require("../../utils/auth");

router
  .route("/")
  .get(getUsers)
  .post(createUser)
  .put(authMiddleware, saveRecipe);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

router.route("/recipes/:recipeId").delete(authMiddleware, deleteRecipe);

module.exports = router;
