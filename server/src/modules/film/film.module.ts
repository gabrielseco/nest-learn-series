import { Module } from '@nestjs/common';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { DatabaseModule } from '../../database/database.module';
import { filmProviders } from './providers/film.providers';

@Module({
  modules: [DatabaseModule],
  controllers: [FilmController],
  components: [
    ...filmProviders,
    FilmService,
  ],
})
export class FilmModule {}