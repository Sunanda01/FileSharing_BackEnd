const documentmodels=require('../Model/documentModel');
const url=require('../Config/config').Backend_Base_Url;
const docController= {

 async fileController(req,res){
   // console.log(req);
   // return res.status(200).json({msg:'Successful'});
   const fileObj={
      path:req.file.path,
      name:req.file.originalname
   }
   try{
      const document_Model=await documentmodels.create(fileObj);
      // console.log(document_Model);
      return res.status(200).json({path:`${url}document_Model${document_Model._id}`});
   }catch(err){
      console.error(err.message);
      return res.status(500).json({error:err.messag`e});
   }
},
async fileDownload(req,res){
   try{
      const file= await documentmodels.findById(req.params.id);
      if (!file) {
         return res.status(404).json({ error: 'File not found' });
       }    
      file.downloadContent++;
      await file.save();
      res.download(file.path,file.name);
   }catch(err){
      res.status(500).json({ error: err.message });
   }
}
}
module.exports=docController;