import mongoose from "mongoose";


export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:"Restaurant",
    })
    .then(()=>{
        console.log("connected to DB successfully");
    })
    .catch((err)=>{
        console.log(`Some error occured while connecting DB ${err}`);
    })
}