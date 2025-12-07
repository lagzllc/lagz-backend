"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../config/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function createTechnician() {
    const hashed = await bcrypt_1.default.hash("password123", 10);
    const tech = await prisma_1.prisma.user.create({
        data: {
            name: "Technician One",
            email: "tech1@example.com",
            password: hashed,
            role: "TECHNICIAN",
        },
    });
    console.log("Technician created:", tech);
}
createTechnician();
