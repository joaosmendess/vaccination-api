import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VaccinationPointsService } from './vaccination-points.service';

@Controller('vaccination-points')
export class VaccinationPointsController {
  constructor(private readonly vaccinationPointsService: VaccinationPointsService) {}

  // Rota para inserir dados de exemplo
  @Get('seed')
  async seed() {
    return this.vaccinationPointsService.createDummyData();
  }

  // Rota para criar um novo ponto de vacinação
  @Post()
  async create(@Body() createVaccinationPointDto: { name: string, address: string, cityId: string, hours: string }) {
    return this.vaccinationPointsService.create(createVaccinationPointDto);
  }

  // Rota para buscar todos os pontos de vacinação
  @Get()
  async findAll() {
    return this.vaccinationPointsService.findAll();
  }

  // Rota para buscar pontos de vacinação por cityId
  @Get(':cityId')
  async findByCity(@Param('cityId') cityId: string) {
    return this.vaccinationPointsService.findByCity(cityId);
  }

  // Rota para atualizar um ponto de vacinação
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVaccinationPointDto: { name: string, address: string, cityId: string, hours: string }) {
    return this.vaccinationPointsService.update(id, updateVaccinationPointDto);
  }

  // Rota para remover um ponto de vacinação
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.vaccinationPointsService.remove(id);
  }
}
