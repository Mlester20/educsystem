import mongoose, { Schema, Document } from "mongoose";

export interface ISubject extends Document {
  name: string; // "Mathematics", "Physics", etc.
  code: string; // "MATH101", "PHYS101", etc.
  teacher?: mongoose.Types.ObjectId[]; // Default teacher for this subject
  isActive: boolean; // Indicates if the subject is currently active
}

const subjectSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    teacher: [{ type: Schema.Types.ObjectId, ref: "User" }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<ISubject>("Subject", subjectSchema);