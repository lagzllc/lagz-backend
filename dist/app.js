"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const booking_routes_1 = __importDefault(require("./routes/booking.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const technician_routes_1 = __importDefault(require("./routes/technician.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Health
app.get("/", (req, res) => {
    res.send("Lagz Enterprise Backend API Running 🚀");
});
// Routes
app.use("/auth", auth_routes_1.default);
app.use("/booking", booking_routes_1.default);
app.use("/admin", admin_routes_1.default);
app.use("/technician", technician_routes_1.default);
exports.default = app;
