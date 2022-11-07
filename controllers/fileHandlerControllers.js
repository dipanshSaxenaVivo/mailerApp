const { copyFile,open,unlink,rename,readFile,appendFile } = require('fs/promises');
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
  

module.exports = {copyFileReq,createFile,deleteFile,moveFile,readFileReq,renameFile,writeFile}