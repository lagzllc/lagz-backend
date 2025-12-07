"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const prisma_1 = require("../config/prisma");
const router = (0, express_1.Router)();
// Get technician's assigned jobs
router.get("/jobs", (0, auth_1.auth)(["TECHNICIAN"]), async (req, res) => {
    const jobs = await prisma_1.prisma.booking.findMany({
        where: { technicianId: req.user.id },
        include: {
            customer: true,
        },
    });
    res.json(jobs);
});
// Technician updates job status (ACCEPTED, COMPLETED)
router.post("/jobs/update", (0, auth_1.auth)(["TECHNICIAN"]), async (req, res) => {
    const { bookingId, status } = req.body;
    const updated = await prisma_1.prisma.booking.update({
        where: { id: bookingId },
        data: { status },
    });
    res.json(updated);
});
exports.default = router;
