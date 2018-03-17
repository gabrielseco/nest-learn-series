import * as data from './../data/films.json';
import { IMigrationFilm } from './interfaces';
import { MigrationFilm } from './migration-film.model';

class Migration {
  data: IMigrationFilm[];
  constructor(data: IMigrationFilm[]) {
    this.data = data;
  }

  init(): void {
    const parsedFilms = this.parseMigrationData();
  }

  private parseMigrationData(): MigrationFilm[] {
    return this.data.map(film => new MigrationFilm(film));
  }
}

const migration: Migration = new Migration(<any>data);

migration.init();