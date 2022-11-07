const { unlink } = require('fs/promises');
async function deleteAFile(filePath) {
  try {
    await unlink(`./fromReq/${filePath}`);
    console.log(`Deleted ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
}

const deleteFile = (req, res, next)=>{
    const {fileName} = req.body
try {
    deleteAFile(fileName)
    console.log('hello')
    res.send('hi')
} catch {
    res.send('error')
}
}

module.exports = deleteFile