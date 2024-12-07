import { Document } from 'mongoose';

export interface VaccinationPoint extends Document {
  id: string;
  name: string;
  cityId: string;  
  address: string;
  hours: string;
}
