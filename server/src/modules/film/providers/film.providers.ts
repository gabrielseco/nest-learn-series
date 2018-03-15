import { Constants } from './../../../constants';
import { Connection, Repository } from 'typeorm';
import { Film } from './../entities/film.entity';

export const filmProviders = [
  {
    provide: Constants.FilmRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(Film),
    inject: [Constants.DbConnectionToken],
  },
];