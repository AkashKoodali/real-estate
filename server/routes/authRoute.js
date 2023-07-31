import express from "express";
import { createUser, loginUser } from "../controller/authCntrl.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

export { router as authRoute };
