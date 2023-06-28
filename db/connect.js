import mongoose from "mongoose";

const connectDb=async (Uri)=>{
    try {
        const Option={
            dbName:'User',
        }
        await mongoose.connect(Uri,Option);
        console.log("Connection Successfully..");
    } catch (err) {
        console.log(err);
    }
}
 
export default connectDb;