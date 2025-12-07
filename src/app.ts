import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/booking.routes";
import adminRoutes from "./routes/admin.routes";
import technicianRoutes from "./routes/technician.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Health
app.get("/", (req, res) => {
  res.send("Lagz Enterprise Backend API Running 🚀");
});

// Routes
app.use("/auth", authRoutes);
app.use("/booking", bookingRoutes);
app.use("/admin", adminRoutes);
app.use("/technician", technicianRoutes);

export default app;
