var express = require("express");
const { copyFileReq, createFile, deleteFile, moveFile, readFileReq, renameFile, writeFile } = require("../controllers/fileHandlerControllers");
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
