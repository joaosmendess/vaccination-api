import { Test, TestingModule } from '@nestjs/testing';
import { VaccinationPointsService } from './vaccination-points.service';

describe('VaccinationPointsService', () => {
  let service: VaccinationPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaccinationPointsService],
    }).compile();

    service = module.get<VaccinationPointsService>(VaccinationPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
