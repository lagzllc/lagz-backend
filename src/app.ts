import technicianRoutes from "./routes/technician.routes";

app.use("/technician", technicianRoutes);
import adminRoutes from "./routes/admin.routes";
app.use("/admin", adminRoutes);
