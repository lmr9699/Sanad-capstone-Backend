import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { uploadSingle, uploadFile } from "../../middlewares/multer";
import {
  uploadUserImage,
  uploadChildImage,
  uploadCenterImage,
  uploadProfessionalImage,
  uploadChildMedicalFile,
  deleteChildMedicalFile,
} from "./upload.controller";

const router = Router();

// All upload routes require authentication
router.use(authenticate);

// POST /api/upload/user/:userId - Upload user profile image
router.post("/user/:userId", uploadSingle, uploadUserImage);

// POST /api/upload/child/:childId - Upload child image
router.post("/child/:childId", uploadSingle, uploadChildImage);

// POST /api/upload/center/:centerId - Upload center image
router.post("/center/:centerId", uploadSingle, uploadCenterImage);

// POST /api/upload/professional/:professionalId - Upload professional image
router.post("/professional/:professionalId", uploadSingle, uploadProfessionalImage);

// POST /api/upload/child/:childId/medical-file - Upload medical file for child
router.post("/child/:childId/medical-file", uploadFile, uploadChildMedicalFile);

// DELETE /api/upload/child/:childId/medical-file/:fileName - Delete medical file from child
router.delete("/child/:childId/medical-file/:fileName", deleteChildMedicalFile);

export default router;
