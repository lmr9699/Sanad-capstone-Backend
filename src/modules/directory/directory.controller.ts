import { Response, NextFunction } from "express";
import mongoose from "mongoose";
import Professional from "../../models/Professional.model";
import { ApiError } from "../../middlewares/apiError";
import { HTTP_STATUS } from "../../config/constants";
import { AuthRequest } from "../../middlewares/auth.middleware";

/**
 * Get all professionals with optional filters
 * GET /api/directory/professionals
 * Query params: specialty, search, city
 */
export const getProfessionals = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    const { specialty, search, city } = req.query;

    // Build query
    const query: any = {};

    if (specialty && specialty !== "all") {
      query.specialty = specialty;
    }

    if (search && typeof search === "string") {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { specialtyLabel: { $regex: search, $options: "i" } },
        { bio: { $regex: search, $options: "i" } },
      ];
    }

    if (city && typeof city === "string") {
      query.location = { $regex: city, $options: "i" };
    }

    const professionals = await Professional.find(query)
      .sort({ rating: -1, name: 1 })
      .populate("centerId", "name");

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        professionals: professionals.map((professional) => ({
          id: professional._id.toString(),
          name: professional.name,
          specialty: professional.specialty,
          specialtyLabel: professional.specialtyLabel,
          experience: professional.experience,
          rating: professional.rating,
          reviews: professional.reviews,
          availability: professional.availability,
          verified: professional.verified,
          color: professional.color,
          bio: professional.bio,
          education: professional.education,
          certifications: professional.certifications,
          languages: professional.languages,
          services: professional.services,
          location: professional.location,
          consultationFee: professional.consultationFee,
          nextAvailable: professional.nextAvailable,
          email: professional.email,
          phone: professional.phone,
          image: professional.image,
          centerId: professional.centerId
            ? (professional.centerId as any)._id?.toString()
            : undefined,
          centerName: professional.centerId
            ? (professional.centerId as any).name
            : undefined,
          createdAt: professional.createdAt,
          updatedAt: professional.updatedAt,
        })),
        count: professionals.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get professional by ID
 * GET /api/directory/professionals/:professionalId
 */
export const getProfessionalById = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    const professionalId = Array.isArray(req.params.professionalId)
      ? req.params.professionalId[0]
      : req.params.professionalId;

    if (!professionalId || !mongoose.Types.ObjectId.isValid(professionalId)) {
      throw ApiError.badRequest("Invalid professional ID format");
    }

    const professional = await Professional.findById(professionalId).populate(
      "centerId",
      "name address phone"
    );

    if (!professional) {
      throw ApiError.notFound("Professional not found");
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        professional: {
          id: professional._id.toString(),
          name: professional.name,
          specialty: professional.specialty,
          specialtyLabel: professional.specialtyLabel,
          experience: professional.experience,
          rating: professional.rating,
          reviews: professional.reviews,
          availability: professional.availability,
          verified: professional.verified,
          color: professional.color,
          bio: professional.bio,
          education: professional.education,
          certifications: professional.certifications,
          languages: professional.languages,
          services: professional.services,
          location: professional.location,
          consultationFee: professional.consultationFee,
          nextAvailable: professional.nextAvailable,
          email: professional.email,
          phone: professional.phone,
          image: professional.image,
          centerId: professional.centerId
            ? (professional.centerId as any)._id?.toString()
            : undefined,
          centerName: professional.centerId
            ? (professional.centerId as any).name
            : undefined,
          createdAt: professional.createdAt,
          updatedAt: professional.updatedAt,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get list of professional specialties
 * GET /api/directory/professionals/specialties/list
 */
export const getProfessionalSpecialties = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    const specialties = await Professional.distinct("specialty");

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: specialties,
    });
  } catch (error) {
    next(error);
  }
};
