import mongoose from "mongoose";

async function dbConnect() {
    const connection_url = process.env.MONGODB_URI;
     mongoose.connect(connection_url)
    .then(()=>{
        console.log("Connected to DB");
        return true
    })
    .catch((err)=>{
        console.log(err,"Error connecting DB")
    })
    
}

export default dbConnect;