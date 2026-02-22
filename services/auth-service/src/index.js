require("dotenv").config();
import app from "./app";

const PORT = process.env.PORT || 4001;

connectDB()
  .then(() => {
    listen(PORT, () => {
      console.log(`Auth Service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
