import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://seebpubg:eMJW9Us9yqkmthY4@cluster0.gdub5tu.mongodb.net/blog-app');
    console.log('DB Connected');
}