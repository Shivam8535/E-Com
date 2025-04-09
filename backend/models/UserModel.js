import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    googleID: { type: Number, unique: true },
    avtar: {type: String},
    name: { type: String },
    email: { type: Array, unique: true },
    password: { type: Number },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });


const User = mongoose.model("User", userSchema, "Users");

export default User;