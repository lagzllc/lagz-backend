require("dotenv").config();

module.exports = {
  schema: "./prisma/schema.prisma",
  dotenv: {
    path: "./.env",
  },
};
