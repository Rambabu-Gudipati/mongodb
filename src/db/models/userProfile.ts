// Import mongoose and define the types for your schema
import mongoose, { Document, Schema } from "mongoose";
import { DataTypes, INTEGER, Model, Optional } from "sequelize";

// Define the interface for the document (optional but recommended)
interface ProfileAttributes extends Document {
  first_name: string;
  last_name: string;
  dob: Date;
  aadhar_card: number;
  gender: string;
  address: string;
}
export interface userProfile extends ProfileAttributes, Document {}


// Create the schema using the defined types
const userProfileSchema = new Schema<ProfileAttributes>({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  aadhar_card: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
}, { collection: 'UserProfile' });

// Define the model type and create the model
const UserProfile = mongoose.model<ProfileAttributes>("UserProfile", userProfileSchema);

// Export the model
export default UserProfile;
