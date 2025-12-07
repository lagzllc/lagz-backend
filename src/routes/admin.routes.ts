import { Router } from "express";
import { auth } from "../middleware/auth";
import { prisma } from "../config/prisma";

const router = Router();

// Get all users
router.get("/users", auth(["ADMIN"]), async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Get all bookings
router.get("/bookings", auth(["ADMIN"]), async (req, res) => {
  const bookings = await prisma.booking.findMany({
    include: {
      customer: true,
      technician: true,
    },
  });

  res.json(bookings);
});

// Assign technician to booking
router.post("/assign", auth(["ADMIN"]), async (req, res) => {
  const { bookingId, technicianId } = req.body;

  const updated = await prisma.booking.update({
    where: { id: bookingId },
    data: {
      technicianId,
      status: "ASSIGNED",
    },
  });

  res.json(updated);
});

export default router;
