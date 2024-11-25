const express=require('express');
const routes=express.Router();
const {fileController, fileDownload}=require('../Controller/DocumentController');
const fileUpload=require('../Middleware/multer');

routes.post('/upload',fileUpload.single('file'),fileController);
routes.get('/document_Model/:id',fileDownload);
module.exports=routes;