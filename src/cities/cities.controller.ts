import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  async create(@Body() createCityDto: { name: string; state: string }) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  async findAll() {
    return this.citiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.citiesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCityDto: { name: string; state: string }) {
    return this.citiesService.update(id, updateCityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.citiesService.remove(id);
  }

  @Get('seed')
  async seed() {
    return this.citiesService.createDummyData();
  }
}
