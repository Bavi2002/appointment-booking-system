require("dotenv").config();
import { listen } from "./app";
import connectDB from "./db";

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    listen(PORT, () => {
      console.log(`Appointment Service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
