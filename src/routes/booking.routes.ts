import { Router } from "express";
import { auth } from "../middleware/auth";
import { createBooking, getMyBookings } from "../controllers/booking.controller";

const router = Router();

router.post("/", auth(["CUSTOMER"]), createBooking);
router.get("/", auth(["CUSTOMER"]), getMyBookings);

export default router;
