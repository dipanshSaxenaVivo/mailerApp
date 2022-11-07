const { rename } = require("fs/promises");
const { join } = require("path");
async function moveAFile(from, to) {
//   const fromPath = join(__dirname, "from", from);
//   const destPath = join(__dirname, "to", to);
  try {
    await rename(`./fromReq/${from}`, `./toReq/${to}`);
    console.log(`Moved ${from} destPath ${to}`);
  } catch (error) {
    console.error(`Got an error trying to move the file: ${error.message}`);
  }
}

const moveFile = (req, res, next) => {
  const { from, to } = req.body;
  try {
    moveAFile(from, to);
    console.log("hello");
    res.send("hi");
  } catch (error) {}
};

module.exports = moveFile;
