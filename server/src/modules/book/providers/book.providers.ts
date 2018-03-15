import { Constants } from './../../../constants';
import { Connection, Repository } from 'typeorm';
import { Book } from './../entities/book.entity';

export const bookProviders = [
  {
    provide: Constants.BookRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(Book),
    inject: [Constants.DbConnectionToken],
  },
];