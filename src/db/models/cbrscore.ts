import mongoose, { Document, Schema } from "mongoose";

interface CBRScoreDocument extends Document {
    interview_id: number;
    question_id: number;
    score: number;
    comment: string;
    interview_type: number;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

const CBRScoreSchema = new Schema<CBRScoreDocument>({
    interview_id: {
        type: Number,
        required: true,
    },
    question_id: {
        type: Number,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    interview_type: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
},{ collection: 'CbrScore' });

const CBRScoreModel = mongoose.model<CBRScoreDocument>("CBRScore", CBRScoreSchema);

export default CBRScoreModel;
