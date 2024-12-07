import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitySchema } from './city.schema';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'City', schema: CitySchema }])],
  providers: [CitiesService],
  controllers: [CitiesController],
  exports: [MongooseModule],
})
export class CitiesModule {}
