import mongoose, { model } from 'mongoose';


const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.BD_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = ConnectDB;