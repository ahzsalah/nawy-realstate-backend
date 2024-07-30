import { Controller, Get, Query } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { ApiTags } from '@nestjs/swagger';
import { Developer } from 'src/database/developer';

@ApiTags('/developers')
@Controller('developers')
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @Get('/add')
  add(@Query('name') name: string) {
    const newDeveloper = new Developer();
    newDeveloper.name = name;
    this.developersService.add(newDeveloper);
  }

  @Get('/get')
  get(@Query('id') id: number) {
    return this.developersService.findOne(id);
  }

  @Get('/getAll')
  getAll() {
    return this.developersService.findAll();
  }

  @Get('/delete')
  delete(@Query('id') id: number) {
    this.developersService.remove(id);
  }
}
