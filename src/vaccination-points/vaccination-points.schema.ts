import { Schema } from 'mongoose';

export const VaccinationPointSchema = new Schema({
  name: { type: String, required: true },
  cityId: { type: Schema.Types.ObjectId, ref: 'City' },
  address: { type: String },
  hours: { type: String },
});
