import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
} from "../controller/residencyCntrl.js";
import verifyToken from "../config/verifyToken.js";

const router = express.Router();

router.post("/create", verifyToken, createResidency);
router.get("/allresd", getAllResidencies);
router.get("/:id", getResidency);
export { router as residencyRoute };
