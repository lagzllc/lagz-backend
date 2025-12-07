import { prisma } from "../config/prisma";
import { sendEmail } from "../services/email.service";

export const createBooking = async (req: any, res: any) => {
  const { serviceType, date, notes } = req.body;

  const booking = await prisma.booking.create({
    data: {
      serviceType,
      date: new Date(date),
      notes,
      customerId: req.user.id,
    },
  });

  await sendEmail(
    req.user.email,
    "Booking Created",
    `<p>Your booking has been created successfully.</p>`
  );

  res.json(booking);
};

export const getMyBookings = async (req: any, res: any) => {
  const bookings = await prisma.booking.findMany({
    where: { customerId: req.user.id },
  });

  res.json(bookings);
};
