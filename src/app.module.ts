import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccinationPointsModule } from './vaccination-points/vaccination-points.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/vaccination-api'), // Coloque a URL do seu banco MongoDB aqui
    VaccinationPointsModule,
    CitiesModule,
  ],
})
export class AppModule {}
