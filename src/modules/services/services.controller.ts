import { Response, NextFunction } from "express";
import mongoose from "mongoose";
import Service from "../../models/Service.model";
import { ApiError } from "../../middlewares/apiError";
import { HTTP_STATUS } from "../../config/constants";
import { AuthRequest } from "../../middlewares/auth.middleware";
import Professional from "../../models/Professional.model";
import Center from "../../models/Center.model";

/**
 * Get all services
 * GET /api/services
 */
export const getServices = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    const services = await Service.find().sort({ name: 1 });

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        services: services.map((service) => ({
          id: service._id.toString(),
          name: service.name,
          description: service.description,
          longDescription: service.longDescription,
          icon: service.icon,
          category: service.category,
          rating: service.rating,
          reviews: service.reviews,
          providers: service.providers,
          color: service.color,
          benefits: service.benefits,
          duration: service.duration,
          frequency: service.frequency,
          ageRange: service.ageRange,
          createdAt: service.createdAt,
          updatedAt: service.updatedAt,
        })),
        count: services.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get service by ID
 * GET /api/services/:serviceId
 */
export const getServiceById = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    const serviceId = Array.isArray(req.params.serviceId)
      ? req.params.serviceId[0]
      : req.params.serviceId;

    if (!serviceId || !mongoose.Types.ObjectId.isValid(serviceId)) {
      throw ApiError.badRequest("Invalid service ID format");
    }

    const service = await Service.findById(serviceId);

    if (!service) {
      throw ApiError.notFound("Service not found");
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        service: {
          id: service._id.toString(),
          name: service.name,
          description: service.description,
          longDescription: service.longDescription,
          icon: service.icon,
          category: service.category,
          rating: service.rating,
          reviews: service.reviews,
          providers: service.providers,
          color: service.color,
          benefits: service.benefits,
          duration: service.duration,
          frequency: service.frequency,
          ageRange: service.ageRange,
          createdAt: service.createdAt,
          updatedAt: service.updatedAt,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};


export const getServiceProviders = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // if (!req.user) {
    //   throw ApiError.unauthorized("User not authenticated");
    // }

  const serviceId = Array.isArray(req.params.serviceId)
    ? req.params.serviceId[0]
    : req.params.serviceId;

  if (!serviceId || !mongoose.Types.ObjectId.isValid(serviceId)) {
    throw ApiError.badRequest("Invalid service ID format");
  }

  //professionals 
  const professionals = await Professional.find({ services: { $in: [serviceId] } });
  //centers
  const centers = await Center.find({ services: { $in: [serviceId] } });
  
  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: {
      professionals: professionals.map((prof) => ({
        id: prof._id.toString(),
        name: prof.name,
        specialty: prof.specialty,
        specialtyLabel: prof.specialtyLabel,
        experience: prof.experience,
        rating: prof.rating,
        reviews: prof.reviews,
        availability: prof.availability,
        verified: prof.verified,
        color: prof.color,
        bio: prof.bio,
        education: prof.education,
        certifications: prof.certifications,
        languages: prof.languages,
        services: prof.services,
        location: prof.location,
        consultationFee: prof.consultationFee,
        nextAvailable: prof.nextAvailable,
        email: prof.email,
        phone: prof.phone,
        image: prof.image,
        centerId: prof.centerId?.toString(),
        centerName: prof.centerId ? (prof.centerId as any).name : undefined,
      })),
      centers: centers.map((center) => ({
        id: center._id.toString(),
        name: center.name,
        type: center.type,
        address: center.address,
        city: center.city,
        phone: center.phone,
        email: center.email,
        description: center.description,
        specialties: center.specialties,
        operatingHours: center.operatingHours,
        rating: center.rating,
        reviews: center.reviews || [],
        latitude: center.latitude,
        longitude: center.longitude,
        image: center.image,
      })),
    },
  });

    const service = await Service.findById(serviceId).populate("providers");
  } catch (error) {
    next(error);
  }
};