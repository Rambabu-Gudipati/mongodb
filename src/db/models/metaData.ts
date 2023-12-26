
const mongoose = require('mongoose');

const metaDataSchema = new mongoose.Schema({
  type: { type: String, enum: ['Feature'], default: 'Feature', required: true },
  geometry: {
    type: { type: String, enum: ['Point'], default: 'Point', required: true },
    coordinates: { type: [Number], required: true },
  },
  properties: {
    image_details: {
      filename: { type: String, required: true },
      timestamp: { type: Date, default: Date.now, required: true },
    },
    wayId: { type: String, required: true },  
    elements: [
      {
        type: { type: String, enum: ['way', 'node'], required: true },
        nodes: { type: [Number], required: true },
        tags: {
          highway: { type: String },
          lanes: { type: String },
          maxspeed: { type: String },
          name: { type: String, required: true },
          oneway: { type: String },
          surface: { type: String},
        },
      },
    ],
    ai_output: {
      class_labels: { type: [String], required: true },
      probabilities: { type: [Number], required: true },
      num_signs_detected: { type: String },
    },
  },
}, { collection: 'MetaData' });

const metaData = mongoose.model('MetaData', metaDataSchema);

export default metaData
