import express from "express";
import {
  bookVisit,
  getAllBookings,
  toFav,
  cancelBooking,
  getAllFavorites,
} from "../controller/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/bookVisit/:id", bookVisit);

router.post("/allBookings", getAllBookings);

router.post("/removeBooking/:id", cancelBooking);

router.post("/toFav/:rid", toFav);

router.post("/allFav/", getAllFavorites);

export { router as userRoute };
