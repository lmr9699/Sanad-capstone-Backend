import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { ApiError } from "../../middlewares/apiError";
import { HTTP_STATUS } from "../../config/constants";
import User from "../../models/User.model";
import Child from "../../models/Child.model";
import Center from "../../models/Center.model";
import Professional from "../../models/Professional.model";
import mongoose from "mongoose";
import path from "path";
import fs from "fs";

/**
 * Upload user profile image
 * POST /api/upload/user/:userId
 */
export const uploadUserImage = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    if (!req.file) {
      throw ApiError.badRequest("No image file provided");
    }

    const userId = req.params.userId;

    // Check if user exists and user can only update their own image
    if (req.user.id !== userId && req.user.role !== "admin") {
      throw ApiError.forbidden("You can only update your own profile image");
    }

    const user = await User.findById(userId);
    if (!user) {
      // Delete uploaded file if user doesn't exist
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.notFound("User not found");
    }

    // Delete old image if exists
    if (user.image) {
      const oldImagePath = path.join(__dirname, "..", "..", "..", "uploads", path.basename(user.image));
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // Save ONLY the path to the database (file is already saved to uploads folder by multer)
    // The path format: /uploads/filename.jpg
    // This path will be used with static file serving to access the image
    const imageUrl = `/uploads/${req.file.filename}`;
    user.image = imageUrl; // Store only the path, not the file itself
    await user.save();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        imageUrl: imageUrl,
        message: "User image uploaded successfully",
      },
    });
  } catch (error) {
    // Delete uploaded file on error
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

/**
 * Upload child image
 * POST /api/upload/child/:childId
 */
export const uploadChildImage = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    if (!req.file) {
      throw ApiError.badRequest("No image file provided");
    }

    const childId = req.params.childId;

    const child = await Child.findById(childId);
    if (!child) {
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.notFound("Child not found");
    }

    // Check if user owns the child or is admin
    if (child.parentId.toString() !== req.user.id && req.user.role !== "admin") {
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.forbidden("You can only update images for your own children");
    }

    // Delete old image if exists
    if (child.image) {
      const oldImagePath = path.join(__dirname, "..", "..", "..", "uploads", path.basename(child.image));
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // Save ONLY the path to the database (file is already saved to uploads folder by multer)
    const imageUrl = `/uploads/${req.file.filename}`;
    child.image = imageUrl; // Store only the path, not the file itself
    await child.save();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        imageUrl: imageUrl,
        message: "Child image uploaded successfully",
      },
    });
  } catch (error) {
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

/**
 * Upload center image
 * POST /api/upload/center/:centerId
 */
export const uploadCenterImage = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    if (!req.file) {
      throw ApiError.badRequest("No image file provided");
    }

    const centerId = req.params.centerId;

    const center = await Center.findById(centerId);
    if (!center) {
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.notFound("Center not found");
    }

    // Only admins can upload center images (or you can add center ownership logic)
    if (req.user.role !== "admin") {
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.forbidden("Only admins can upload center images");
    }

    // Delete old image if exists
    if (center.image) {
      const oldImagePath = path.join(__dirname, "..", "..", "..", "uploads", path.basename(center.image));
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // Save ONLY the path to the database (file is already saved to uploads folder by multer)
    const imageUrl = `/uploads/${req.file.filename}`;
    center.image = imageUrl; // Store only the path, not the file itself
    await center.save();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        imageUrl: imageUrl,
        message: "Center image uploaded successfully",
      },
    });
  } catch (error) {
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

/**
 * Upload professional image
 * POST /api/upload/professional/:professionalId
 */
export const uploadProfessionalImage = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    if (!req.file) {
      throw ApiError.badRequest("No image file provided");
    }

    const professionalId = req.params.professionalId;

    const professional = await Professional.findById(professionalId);
    if (!professional) {
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.notFound("Professional not found");
    }

    // Only admins or the professional themselves can upload images
    if (req.user.role !== "admin" && professional.email !== req.user.email) {
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.forbidden("You don't have permission to upload this professional's image");
    }

    // Delete old image if exists
    if (professional.image) {
      const oldImagePath = path.join(__dirname, "..", "..", "..", "uploads", path.basename(professional.image));
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // Save ONLY the path to the database (file is already saved to uploads folder by multer)
    const imageUrl = `/uploads/${req.file.filename}`;
    professional.image = imageUrl; // Store only the path, not the file itself
    await professional.save();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        imageUrl: imageUrl,
        message: "Professional image uploaded successfully",
      },
    });
  } catch (error) {
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

/**
 * Upload medical file for child
 * POST /api/upload/child/:childId/medical-file
 */
export const uploadChildMedicalFile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    if (!req.file) {
      throw ApiError.badRequest("No file provided");
    }

    const childId = req.params.childId;

    const child = await Child.findById(childId);
    if (!child) {
      // Delete uploaded file if child doesn't exist
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.notFound("Child not found");
    }

    // Check if user owns the child or is admin
    if (child.parentId.toString() !== req.user.id && req.user.role !== "admin") {
      if (req.file.path) {
        fs.unlinkSync(req.file.path);
      }
      throw ApiError.forbidden("You can only upload medical files for your own children");
    }

    // Save ONLY the path to the database (file is already saved to uploads folder by multer)
    const fileUrl = `/uploads/${req.file.filename}`;
    
    // Add file path to child's medicalFiles array
    if (!child.medicalFiles) {
      child.medicalFiles = [];
    }
    child.medicalFiles.push(fileUrl);
    await child.save();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        fileUrl: fileUrl,
        message: "Medical file uploaded successfully",
      },
    });
  } catch (error) {
    // Delete uploaded file on error
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

/**
 * Delete medical file from child
 * DELETE /api/upload/child/:childId/medical-file/:fileName
 */
export const deleteChildMedicalFile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw ApiError.unauthorized("User not authenticated");
    }

    const childId = req.params.childId;
    const fileName = Array.isArray(req.params.fileName) 
      ? req.params.fileName[0] 
      : req.params.fileName;

    const child = await Child.findById(childId);
    if (!child) {
      throw ApiError.notFound("Child not found");
    }

    // Check if user owns the child or is admin
    if (child.parentId.toString() !== req.user.id && req.user.role !== "admin") {
      throw ApiError.forbidden("You can only delete medical files for your own children");
    }

    // Find and remove the file from the array
    const fileUrl = `/uploads/${fileName}`;
    const fileIndex = child.medicalFiles?.indexOf(fileUrl) ?? -1;

    if (fileIndex === -1) {
      throw ApiError.notFound("Medical file not found");
    }

    // Delete file from filesystem
    const filePath = path.join(__dirname, "..", "..", "..", "uploads", fileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Remove from array
    child.medicalFiles = child.medicalFiles?.filter((file) => file !== fileUrl) || [];
    await child.save();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        message: "Medical file deleted successfully",
      },
    });
  } catch (error) {
    next(error);
  }
};
