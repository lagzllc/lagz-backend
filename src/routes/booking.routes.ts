import { Router } from "express";
import { auth } from "../middleware/auth";
import { prisma } from "../config/prisma";

const router = Router();

// Customer creates booking
router.post("/", auth(["CUSTOMER"]), async (req: any, res) => {
  const { serviceType, date, notes } = req.body;

  const booking = await prisma.booking.create({
    data: {
      serviceType,
      date: new Date(date),
      notes,
      customerId: req.user.id,
    },
  });

  res.json(booking);
});

// Customer views all bookings
router.get("/", auth(["CUSTOMER"]), async (req: any, res) => {
  const bookings = await prisma.booking.findMany({
    where: { customerId: req.user.id },
  });

  res.json(bookings);
});

export default router;
