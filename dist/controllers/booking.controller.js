"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyBookings = exports.createBooking = void 0;
const prisma_1 = require("../config/prisma");
const email_service_1 = require("../services/email.service");
const createBooking = async (req, res) => {
    const { serviceType, date, notes } = req.body;
    const booking = await prisma_1.prisma.booking.create({
        data: {
            serviceType,
            date: new Date(date),
            notes,
            customerId: req.user.id,
        },
    });
    await (0, email_service_1.sendEmail)(req.user.email, "Booking Created", `<p>Your booking has been created successfully.</p>`);
    res.json(booking);
};
exports.createBooking = createBooking;
const getMyBookings = async (req, res) => {
    const bookings = await prisma_1.prisma.booking.findMany({
        where: { customerId: req.user.id },
    });
    res.json(bookings);
};
exports.getMyBookings = getMyBookings;
