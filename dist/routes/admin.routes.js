"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const prisma_1 = require("../config/prisma");
const router = (0, express_1.Router)();
// Get all users
router.get("/users", (0, auth_1.auth)(["ADMIN"]), async (req, res) => {
    const users = await prisma_1.prisma.user.findMany();
    res.json(users);
});
// Get all bookings
router.get("/bookings", (0, auth_1.auth)(["ADMIN"]), async (req, res) => {
    const bookings = await prisma_1.prisma.booking.findMany({
        include: {
            customer: true,
            technician: true,
        },
    });
    res.json(bookings);
});
// Assign technician to booking
router.post("/assign", (0, auth_1.auth)(["ADMIN"]), async (req, res) => {
    const { bookingId, technicianId } = req.body;
    const updated = await prisma_1.prisma.booking.update({
        where: { id: bookingId },
        data: {
            technicianId,
            status: "ASSIGNED",
        },
    });
    res.json(updated);
});
exports.default = router;
