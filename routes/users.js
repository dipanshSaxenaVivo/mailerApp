var express = require("express");
const { registerUser, removeUser } = require("../controllers/userControllers");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ data: "respond with a resource" });
});
router.get("/remove", removeUser);
router.post("/register", registerUser);

module.exports = router;
