import mongoose from "mongoose";
async function dbDisconnect() {
   await mongoose.connection.close().then(()=>{
        console.log("Disconnected to DB");
        return true
    })
    .catch((err)=>{
        console.log(err,"Error disconnecting DB")
    })
}
export default dbDisconnect