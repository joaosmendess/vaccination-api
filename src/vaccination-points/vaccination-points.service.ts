import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VaccinationPoint } from './interfaces/vaccination-points'; 
import { City } from '../cities/interfaces/cities.interface';

@Injectable()
export class VaccinationPointsService {
  constructor(
    @InjectModel('VaccinationPoint') private readonly vaccinationPointModel: Model<VaccinationPoint>,
    @InjectModel('City') private readonly cityModel: Model<City>,
  ) {}

  // Método para inserir dados de exemplo
  async createDummyData(): Promise<string> {
    const count = await this.vaccinationPointModel.countDocuments().exec();

    if (count > 0) {
      return 'Coleção de pontos de vacinação já contém dados!';
    }

    // Inserir dados de exemplo, referenciando cidades por cityId
    const cityX = await this.cityModel.findOne({ name: 'Maceió' }).exec();
    const cityY = await this.cityModel.findOne({ name: 'Arapiraca' }).exec();

    const vaccinationPoints = [
      { name: 'Point A', address: 'Street A, City X', cityId: cityX._id, hours: '8:00 - 17:00' },
      { name: 'Point B', address: 'Street B, City Y', cityId: cityY._id, hours: '9:00 - 18:00' },
    ];

    // Insere os dados no banco
    await this.vaccinationPointModel.insertMany(vaccinationPoints);
    return 'Dados de pontos de vacinação inseridos com sucesso!';
  }

  // Criar um ponto de vacinação
  async create(createVaccinationPointDto: { name: string, address: string, cityId: string, hours: string }): Promise<VaccinationPoint> {
    const createdVaccinationPoint = new this.vaccinationPointModel(createVaccinationPointDto);
    return createdVaccinationPoint.save();
  }

  // Buscar pontos de vacinação por cityId
  async findByCity(cityId: string) {
    return this.vaccinationPointModel.find({ cityId }).exec();
  }

  // Buscar todos os pontos de vacinação
  async findAll(): Promise<VaccinationPoint[]> {
    return this.vaccinationPointModel.find().exec();
  }

  // Atualizar um ponto de vacinação
  async update(id: string, updateVaccinationPointDto: { name: string, address: string, cityId: string, hours: string }): Promise<VaccinationPoint> {
    return this.vaccinationPointModel.findByIdAndUpdate(id, updateVaccinationPointDto, { new: true }).exec();
  }

  // Remover um ponto de vacinação
  async remove(id: string): Promise<VaccinationPoint> {
    return this.vaccinationPointModel.findByIdAndDelete(id).exec();
  }
}
