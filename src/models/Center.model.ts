import mongoose, { Document, Schema } from "mongoose";

export interface ICenter extends Document {
  name: string;
  type: "public" | "private";
  address: string;
  city: string;
  phone: string;
  email?: string;
  description?: string;
  specialties?: string[];
  operatingHours?: string;
  rating?: number;
  latitude?: number;
  longitude?: number;
  createdAt: Date;
  updatedAt: Date;
}

const centerSchema = new Schema<ICenter>(
  {
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      required: true,
      enum: ["public", "private"],
      default: "public",
    },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    description: { type: String, trim: true },
    specialties: [{ type: String }],
    operatingHours: { type: String, trim: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    latitude: { type: Number },
    longitude: { type: Number },
  },
  { timestamps: true }
);

// Index for faster queries
centerSchema.index({ city: 1 });
centerSchema.index({ type: 1 });
centerSchema.index({ specialties: 1 });

const Center = mongoose.model<ICenter>("Center", centerSchema);

export default Center;
