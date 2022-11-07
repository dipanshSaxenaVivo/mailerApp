const { copyFile } = require('fs/promises');
const { join } = require('path');
async function copyAFile(from) {
  try {
    await copyFile(`./fromReq/${from}`, `./fromReq/${from}-copy`);
    console.log(`Copied ${from} to ${from}-copy`);
  } catch (err) {
    console.error(`Got an error trying to copy the file: ${err.message}`);
  }
}

const copyFileReq = (req, res, next)=>{
    const {fileName} = req.body
    try {
        console.log(req)
        copyAFile(fileName)
        res.send(`appended ${fileName} with data`)
    } catch (err) {
        
        res.send(req);
    }
}

module.exports = copyFileReq