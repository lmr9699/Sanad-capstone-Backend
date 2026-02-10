import { Router } from "express";
import {
  getProfessionals,
  getProfessionalById,
  getProfessionalSpecialties,
  getProfessionalTags,
} from "./professionals.controller";
import { authenticate } from "../../middlewares/auth.middleware";

const router = Router();

// All professional routes require authentication
router.use(authenticate);

// GET /api/professionals - Get all professionals (with optional filters)
router.get("/", getProfessionals);

// GET /api/professionals/specialties/list - Get list of professional specialties
router.get("/specialties/list", getProfessionalSpecialties);

// GET /api/professionals/tags/list - Get list of professional tags (from services)
router.get("/tags/list", getProfessionalTags);

// GET /api/professionals/:professionalId - Get professional by ID
router.get("/:professionalId", getProfessionalById);

export default router;
