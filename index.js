import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import indexRoutes from "./src/routes/index.routes.js";
import { connectDatabase } from "./src/configs/db.connection.js";

const app = express();
dotenv.config({
    path: "./.env"
})

app.use(cors({
    origin: "*"
}))

app.use(cookieParser({}));
app.use(express.json({limit: "20kb"}));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is live"
    })
})
app.use("/api", indexRoutes);



const port = process.env.PORT || 8080

connectDatabase()
app.listen(port, () => {
    console.log(`server is live on http://localhost:${port}`);
})