var express = require("express");
const deleteFile = require("../controllers/deleteFile");
const copyFileReq = require("../controllers/copyFile");
const createFile = require("../controllers/createFile");
const moveFile = require("../controllers/moveFile");
const readFileReq = require("../controllers/readFile");
const renameFile = require("../controllers/renameFile");
const writeFile = require("../controllers/writeFile");
var router = express.Router();

/* GET home page. */
router.get("/copy", copyFileReq);
router.get("/create", createFile);
router.get("/delete", deleteFile);
router.get("/move", moveFile);
router.get("/read", readFileReq);
router.get("/rename", renameFile);
router.get("/write", writeFile);

module.exports = router;
