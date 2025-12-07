import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";

async function createTechnician() {
  const hashed = await bcrypt.hash("password123", 10);

  const tech = await prisma.user.create({
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
