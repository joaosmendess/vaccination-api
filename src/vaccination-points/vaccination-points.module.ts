import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccinationPointsService } from './vaccination-points.service';
import { VaccinationPointsController } from './vaccination-points.controller';
import { VaccinationPointSchema } from './vaccination-points.schema'; 
import { CitiesModule } from '../cities/cities.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'VaccinationPoint', schema: VaccinationPointSchema }]),
    CitiesModule, 
  ],
  providers: [VaccinationPointsService],
  controllers: [VaccinationPointsController],
})
export class VaccinationPointsModule {}
