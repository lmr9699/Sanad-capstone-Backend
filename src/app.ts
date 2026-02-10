import express from "express";
import connectDB from "./config/db";
import { env } from "./config/env";
import cors from "cors";
import morgan from "morgan";
import path from "path";
// import directoryRoutes from "./modules/directory/directory.routes"; 
import { errorHandler } from "./middlewares/error.middleware";
import { verifyEmailConfig } from "./utils/email";
import usersRoutes from "./modules/users/users.routes";
import authRoutes from "./modules/auth/auth.routes";
import childrenRoutes from "./modules/children/children.routes";
import communityRoutes from "./modules/community/community.routes";
import servicesRoutes from "./modules/services/services.routes";
import centerRoutes from "./modules/centers/centers.routes";
import helpCenterRoutes from "./modules/helpCenter/helpCenter.routes";
import aiRoutes from "./modules/helpCenter/ai.routes";
import professionalRoutes from "./modules/professionals/professionals.routes";
import uploadRoutes from "./modules/upload/upload.routes";

const app = express();

connectDB();

// Verify email configuration (only in production)
if (env.NODE_ENV === "production" && env.EMAIL_HOST) {
  verifyEmailConfig().catch((error) => {
    console.warn("Email configuration verification failed:", error);
  });
}

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    data: { message: "Server is running" },
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/children", childrenRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/helpCenter/ai", aiRoutes);
// app.use("/api/directory", directoryRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/centers", centerRoutes);
app.use("/api/helpCenter", helpCenterRoutes);
app.use("/api/professionals", professionalRoutes);
app.use("/api/upload", uploadRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Server is running on http://localhost:${env.PORT}`);
});
