import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleID: { type: Number, unique: true, sparse: true },
    avatar: { type: String },
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });


const User = mongoose.model("User", userSchema, "Users");

export default User;