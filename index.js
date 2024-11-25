const express=require('express');
const PORT=require('./Config/config').PORT;
const routes=require('./Routes/routes');
const cors=require('cors');
const connection=require('./Utils/connection');
const clearFileService=require('./Service/clearFileService')
const cron = require('node-cron');
const app=express();
const url=require('./Config/config').Frontend_Base_Url;

app.use(cors({origin:url}));
app.listen(PORT,()=>{
    connection();
    console.log("connected to PORT ",`${PORT}`);
})
app.use(routes);
cron.schedule('40 16 * * *',function(){clearFileService();})