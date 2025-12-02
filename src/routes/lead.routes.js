import express from "express";
import { allLeads, CreateLead } from "../controllers/lead.controller.js";

const leadRoute = express.Router();
leadRoute.post("/new", CreateLead);
leadRoute.get("/leadapi-98989-87880909-iouihijvb-jbhh7/all", allLeads);

export default leadRoute;