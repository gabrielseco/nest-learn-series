import { IMigrationFilm } from './interfaces';
import { MigrationFilm } from './migration-film.model';
import { FilmService } from '../film.service';

export class Migration {
  data: IMigrationFilm[];
  constructor(
    private readonly filmsMigration: IMigrationFilm[],
    private readonly filmService: FilmService,
  ) {
    this.data = filmsMigration;
  }

  async init() {
    const parsedFilms = this.parseMigrationData();
    for (const film of parsedFilms) {
      const filmInserted = await this.filmService.insert(film);
      console.log('film', filmInserted);
    }
  }

  private parseMigrationData(): MigrationFilm[] {
    return this.data.map(film => new MigrationFilm(film));
  }
}