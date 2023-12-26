// Import mongoose and define the types for your schema
import mongoose, { Document, Schema } from "mongoose";
import { DataTypes, Model, NUMBER, Optional } from "sequelize";

// Define the interface for the document (optional but recommended)
interface JobAttributes extends Document {
  company_name: string;
  email: string;
  no_of_vacancies: number;
  years_of_experience: number;
}
export interface jobDocument extends JobAttributes, Document {}


// Create the schema using the defined types
const jobSchema = new Schema<JobAttributes>({
    company_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  no_of_vacancies: {
    type: Number,
    required: true,
  },
  years_of_experience: {
    type: Number,
    required: true,
  }
},{ collection: 'jobs' });

// Define the model type and create the model
const Jobs = mongoose.model<JobAttributes>("Jobs", jobSchema);

// Export the model
export default Jobs;
