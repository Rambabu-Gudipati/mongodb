// Import mongoose and define the types for your schema
import mongoose, { Document, Schema } from "mongoose";
import { DataTypes, Model, Optional } from "sequelize";

// Define the interface for the document (optional but recommended)
interface UserAttributes extends Document {
  fname: string;
  email: string;
  phone: string;
  degree: string;
  bachelordegree: string;
  country: string;
}
export interface userDocument extends UserAttributes, Document {}


// Create the schema using the defined types
const userSchema = new Schema<UserAttributes>({
  fname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  bachelordegree: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
},{ collection: 'Users' });

// Define the model type and create the model
const Users = mongoose.model<UserAttributes>("Users", userSchema);

// Export the model
export default Users;
