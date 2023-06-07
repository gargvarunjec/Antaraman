import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login",login); // yha pe prefix m auth hoga kyuki indes.js m hmne auth ko call krr rkha h 
export default router;