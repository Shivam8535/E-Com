import mongoose from "mongoose";


function generatePass(options = {}) {
    const defaults = {
        length: 12,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        excludeSimilar: true, // Exclude similar characters like 1, l, I, etc.
        excludeAmbiguous: false, // Exclude ambiguous characters like {}[]()/\'"`~,;:.<>
    };

    const config = { ...defaults, ...options };

    let chars = '';
    let password = '';

    // Character sets
    const upperChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // Removed I
    const lowerChars = 'abcdefghijkmnopqrstuvwxyz'; // Removed l
    const numberChars = '23456789'; // Removed 0,1
    const symbolChars = '!@#$%^&*_+-=';

    // Handle exclusions
    if (config.excludeSimilar) {
        if (config.uppercase) chars += upperChars;
        if (config.lowercase) chars += lowerChars;
        if (config.numbers) chars += numberChars;
    } else {
        if (config.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (config.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (config.numbers) chars += '0123456789';
    }

    if (config.symbols) {
        chars += config.excludeAmbiguous
            ? symbolChars
            : '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    // Generate password
    for (let i = 0; i < config.length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}



const userSchema = new mongoose.Schema({
    googleID: { type: Number, unique: true, sparse: true },
    avatar: { type: String },
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String, default: generatePass },
    isAdmin: { type: Boolean, default: false },
    lastLogin: { type: Date, default: new Date() },
}, { timestamps: true });


const User = mongoose.model("User", userSchema, "Users");

export default User;