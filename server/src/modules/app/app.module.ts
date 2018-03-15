import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FilmModule } from '../film/film.module';
import { BookModule } from '../book/book.module';

@Module({
  imports: [
    FilmModule,
    BookModule,
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
