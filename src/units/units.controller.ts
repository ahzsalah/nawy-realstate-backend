import { Controller, Get, Query } from '@nestjs/common';
import { UnitsService } from './units.service';
import { ApiTags } from '@nestjs/swagger';
import { Unit } from 'src/database/unit';

@ApiTags('/units')
@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get('/add')
  add(
    @Query('name') name: string,
    @Query('bathrooms') bathrooms: number,
    @Query('bedrooms') bedrooms: number,
    @Query('area') area: string,
    @Query('project') projectId: number,
  ) {
    const newUnit = new Unit();
    newUnit.bathrooms = bathrooms;
    newUnit.bedrooms = bedrooms;
    newUnit.area = area;
    this.unitsService.add(newUnit, projectId);
  }

  @Get('/get')
  get(@Query('id') id: number) {
    return this.unitsService.findOne(id);
  }

  @Get('/getAll')
  getAll() {
    return this.unitsService.findAll();
  }

  @Get('/delete')
  delete(@Query('id') id: number) {
    this.unitsService.remove(id);
  }
}
