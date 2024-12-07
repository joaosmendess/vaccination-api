import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './interfaces/cities.interface';

@Injectable()
export class CitiesService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  async create(createCityDto: { name: string; state: string }): Promise<City> {
    const createdCity = new this.cityModel(createCityDto);
    return createdCity.save();
  }

  async findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }

  async findOne(id: string): Promise<City> {
    return this.cityModel.findById(id).exec();
  }

  async update(id: string, updateCityDto: { name: string; state: string }): Promise<City> {
    return this.cityModel.findByIdAndUpdate(id, updateCityDto, { new: true }).exec();
  }

  async remove(id: string): Promise<City> {
    return this.cityModel.findByIdAndDelete(id).exec();
  }

  // Método para inserir dados de exemplo
  async createDummyData(): Promise<string> {
    const count = await this.cityModel.countDocuments().exec();

    if (count > 0) {
      return 'Coleção de cidades já contém dados!';
    }

    // Dados de exemplo a serem inseridos
    const cities = [
      { name: 'City X', state: 'State X' },
      { name: 'City Y', state: 'State Y' },
    ];

    // Insere os dados no banco
    await this.cityModel.insertMany(cities);
    return 'Dados de cidades inseridos com sucesso!';
  }
}
