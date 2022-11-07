const { appendFile} = require('fs/promises');

async function appendToFile(fileName, data) {
  try {
    await appendFile(`./fromReq/${fileName}`, data,'utf8');
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: {error.message}`);
  }
}

const writeFile = (req, res, next)=>{
    const {fileName,data} = req.body
    try {
        console.log(req)
        appendToFile(fileName,data)
        res.send(`appended ${fileName} with data ${data}`)
    } catch (err) {
        
        res.send(req);
    }
}

module.exports = writeFile