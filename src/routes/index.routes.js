import express from "express";
import leadRoute from "./lead.routes.js";
import authRoute from "./auth.routes.js";

const indexRoutes = express.Router();
indexRoutes.use("/lead", leadRoute);
indexRoutes.use("/auth", authRoute);

export default indexRoutes;