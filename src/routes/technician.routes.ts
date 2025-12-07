import { Router } from "express";
import { auth } from "../middleware/auth";
import { prisma } from "../config/prisma";

const router = Router();

// Get technician's assigned jobs
router.get("/jobs", auth(["TECHNICIAN"]), async (req: any, res) => {
  const jobs = await prisma.booking.findMany({
    where: { technicianId: req.user.id },
    include: {
      customer: true,
    },
  });

  res.json(jobs);
});

// Technician updates job status (ACCEPTED, COMPLETED)
router.post("/jobs/update", auth(["TECHNICIAN"]), async (req: any, res) => {
  const { bookingId, status } = req.body;

  const updated = await prisma.booking.update({
    where: { id: bookingId },
    data: { status },
  });

  res.json(updated);
});

export default router;
