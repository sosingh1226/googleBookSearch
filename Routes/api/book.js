const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);
module.exports = router;