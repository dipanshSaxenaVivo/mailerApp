const { open } = require("fs/promises");

async function openFile(fileName, data) {
    try {
      const file = await open(`./fromReq/${fileName}`, 'w');
      await file.write(data);
      console.log(`Opened file ${fileName}`);
    } catch (error) {
      console.error(`Got an error trying to open the file: {error.message}`);
    }
  }

const createFile = (req, res, next) => {
    const {fileName,data} = req.body
    try {
        console.log(req)
        openFile(fileName,data)
        res.send(`created ${fileName}`)
    } catch (err) {
        
        res.send(req);
    }
};

module.exports = createFile;
