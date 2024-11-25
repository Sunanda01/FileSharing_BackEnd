const express=require('express');
const PORT=require('./Config/config').PORT;
const routes=require('./Routes/routes');
const cors=require('cors');
const connection=require('./Utils/connection');
const clearFileService=require('./Service/clearFileService')
const cron = require('node-cron');
const app=express();
app.use(cors());
app.listen(PORT,()=>{
    connection();
    console.log("connected to PORT ",`${PORT}`);
})
app.use(routes);
cron.schedule('40 16 * * *',function(){clearFileService();})