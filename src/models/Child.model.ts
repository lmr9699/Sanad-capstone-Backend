import mongoose, { Schema, Document } from "mongoose";

export interface IChild extends Document {
  name: string;
  age: number;
  gender: string;
  diagnosis?: string;
  medicalHistory?: string;
  medications?: string;
  allergies?: string;
  parentId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const childSchema = new Schema<IChild>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
      max: 120,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    diagnosis: {
      type: String,
      trim: true,
    },
    medicalHistory: {
      type: String,
      trim: true,
    },
    medications: {
      type: String,
      trim: true,
    },
    allergies: {
      type: String,
      trim: true,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Child = mongoose.model<IChild>("Child", childSchema);

export default Child;
