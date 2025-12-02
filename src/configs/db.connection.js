import mongoose from "mongoose"

export const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.CN_STRING);
        return connection
    } catch (error) {
        console.log(error)        
    }
}