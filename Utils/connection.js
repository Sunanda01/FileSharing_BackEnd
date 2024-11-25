const mongoose=require('mongoose');
const link=require('../Config/config').link;

const connection=async()=>{
    try{
        await mongoose.connect(link);
        console.log("DB Connect");
    }catch(err){
        console.log(err);
    }
}
module.exports=connection;