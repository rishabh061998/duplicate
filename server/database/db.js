import mongoose from "mongoose";



export const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-sahh51o-shard-00-00.s1qukx5.mongodb.net:27017,ac-sahh51o-shard-00-01.s1qukx5.mongodb.net:27017,ac-sahh51o-shard-00-02.s1qukx5.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ui9k9r-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
   await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
   console.log('database connected successfully')
    }catch(error){
        console.log('error while connecting with the database',error.message);
    
    }
}


export default Connection;