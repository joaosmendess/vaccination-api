import { Schema } from 'mongoose';

export const CitySchema = new Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
});
