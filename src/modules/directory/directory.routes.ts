import { Router } from "express";
import {
  getProfessionals,
  getProfessionalById,
  getProfessionalSpecialties,
  getProfessionalTags,
} from "./directory.controller";
import {
  getCenters,
  getCenterById,
  createCenter,
  deleteCenter,
} from "../centers/centers.controller";
import { authenticate } from "../../middlewares/auth.middleware";

const router = Router();

// All directory routes require authentication
router.use(authenticate);

// Professionals routes
// GET /api/directory/professionals - Get all professionals (with optional filters)
router.get("/professionals", getProfessionals);

// GET /api/directory/professionals/:professionalId - Get professional by ID
router.get("/professionals/:professionalId", getProfessionalById);

// GET /api/directory/professionals/specialties/list - Get list of specialties
router.get("/professionals/specialties/list", getProfessionalSpecialties);

// GET /api/directory/professionals/tags/list - Get list of tags
router.get("/professionals/tags/list", getProfessionalTags);

// Centers routes
// GET /api/directory/centers - Get all centers (with optional filters)
router.get("/centers", getCenters);

// GET /api/directory/centers/:centerId - Get center by ID
router.get("/centers/:centerId", getCenterById);

// POST /api/directory/centers - Create a new center
router.post("/centers", createCenter);

// DELETE /api/directory/centers/:centerId - Delete center by ID
router.delete("/centers/:centerId", deleteCenter);

export default router;
