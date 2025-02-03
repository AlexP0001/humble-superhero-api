import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

interface Superhero {
  name: string;
  superpower: string;
  humility: number;
}

@Controller('superheroes')
export class SuperheroesController {
  private superheroes: Superhero[] = [];

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    // The DTO automatically validates the humility score (between 1 and 10)
    this.superheroes.push(createSuperheroDto);
    return { message: 'Superhero added successfully', superhero: createSuperheroDto };
  }

  @Get()
  findAll() {
    // Return superheroes sorted by humility in descending order
    return this.superheroes.sort((a, b) => b.humility - a.humility);
  }
}