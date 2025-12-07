"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const booking_controller_1 = require("../controllers/booking.controller");
const router = (0, express_1.Router)();
router.post("/", (0, auth_1.auth)(["CUSTOMER"]), booking_controller_1.createBooking);
router.get("/", (0, auth_1.auth)(["CUSTOMER"]), booking_controller_1.getMyBookings);
exports.default = router;
