import express from "express";
import { configDotenv } from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
import "./config/passport.js"; // 👈 This is important to register the Google strategy
import cors from 'cors';
import { userRouter } from "./routers/routes.js";
configDotenv();
dbConnect();

const port = process.env.PORT;
const app = express();
app.use(cors())
app.use(express.json())


// Router
app.use('', userRouter)


app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});
