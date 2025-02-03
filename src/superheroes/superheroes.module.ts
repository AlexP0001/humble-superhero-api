import { Module } from '@nestjs/common';
import { SuperheroesController } from './superheroes.controller';

@Module({
  controllers: [SuperheroesController],
})
export class SuperheroesModule {}