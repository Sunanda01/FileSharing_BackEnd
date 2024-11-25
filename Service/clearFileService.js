const fs = require("fs");
const path = require("path");
const documentModel=require('../Model/documentModel')
const directory = "uploads";

const ClearFileService=async ()=>{
    console.log("Crone Running !!!")
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(directory, file), (err) => {
            if (err) throw err;
          });
        }
      });

      try{
       await documentModel.deleteMany({})
      }catch(err){
        console.log(err.message);
      }

}

module.exports=ClearFileService;