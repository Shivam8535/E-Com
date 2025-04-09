import mongoose from "mongoose";
export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("✅ DB Connected!");
    } catch (error) {
        console.log("❌ DB Connection Error:", error.message);
    }
}