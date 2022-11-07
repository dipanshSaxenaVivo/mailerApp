const { readFile } = require('fs/promises');
async function readThisFile(filePath) {
  try {
    const data = await readFile(`./fromReq/${filePath}`);
    return data.toString()
  } catch (error) {
    console.error(`Got an error trying to read the file: {error.message}`);
 }
}

const readFileReq = async(req, res, next)=>{
    const{fileName} = req.body
    try {
        const data = await readThisFile(fileName)
        console.log(data)
        res.send(data)
    } catch (err) {
        
        res.send(req);
    }
}

module.exports = readFileReq