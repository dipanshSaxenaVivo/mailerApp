const { rename } = require('fs/promises');

async function renameAFile(from, to) {
  try {
    await rename(`./fromReq/${from}`, `./fromReq/${to}`);
    console.log(`Renamed ${from} to ${to}`);
  } catch (error) {
    console.error(`Got an error trying to rename the file: ${error.message}`);
  }
}

const renameFile = (req, res, next)=>{
    const {from,to} = req.body
    try {
        renameAFile(from,to)
        res.send('hi')
    } catch {
        res.send('error')
    }
}

module.exports = renameFile