var express = require("express");
const sendEmailToAllUsers = require("../controllers/sendEmailToAllUsers");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/sendEmail", sendEmailToAllUsers);

module.exports = router;
