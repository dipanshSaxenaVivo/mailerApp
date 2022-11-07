var express = require("express");
const { registerUser } = require("../controllers/userControllers");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ data: "respond with a resource" });
});
router.post("/register", registerUser);

module.exports = router;
