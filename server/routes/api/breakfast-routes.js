const router = require("express").Router();
const breakfast= require('../../models/Breakfast');
router.route('/').get ((req,res)=>{
  breakfast.find()
  .then(breakfasts => res.json(exercises))
  .catch(error =>res.status(400).json('Error'))
});

const {
  getBreakfasts,
  createBreakfast,
  getSingleBreakfast,
  updateBreakfast,
  deleteBreakfast,
  addReaction,
  removeReaction,
} = require("../../controllers/breakfast-controller");

router.route("/").get(getBreakfasts).post(createBreakfast);

router
  .route("/:breakfastId")
  .get(getSingleBreakfast)
  .put(updateBreakfast)
  .delete(deleteBreakfast);

router
  .route("/:breakfastId/reactions/:reactionId")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
