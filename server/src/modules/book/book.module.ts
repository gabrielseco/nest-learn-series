import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { DatabaseModule } from '../../database/database.module';
import { bookProviders } from './providers/book.providers';

@Module({
  modules: [DatabaseModule],
  controllers: [BookController],
  components: [
    ...bookProviders,
    BookService,
  ],
})
export class BookModule {}