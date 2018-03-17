import { IMigrationFilm } from './interfaces/index';
import { MigrationFilm } from './migration-film.model';

describe('Migration Model', () => {
  it('should set the fields correctly and parse some fields', () => {
    const mock: IMigrationFilm = {
        id: 14,
        nombre: 'Two Night Stand',
        overview: '',
        imagen: 'https://yts.ag/assets/images/movies/Two_Night_Stand_2014/medium-cover.jpg',
        year: 2014,
        idMovieDB: 0,
        color: 'NULL',
        createdAt: '2016-01-15 18:23:31',
        updatedAt: '2016-01-15 18:23:31',
    };
    const migrationFilm = new MigrationFilm(mock);

    expect(migrationFilm.id).toBe(mock.id);
    expect(migrationFilm.name).toBe(mock.nombre);
    expect(migrationFilm.overview).toBe(undefined);
    expect(migrationFilm.artwork).toBe(mock.imagen);
    expect(migrationFilm.year).toBe(mock.year);
    expect(migrationFilm.idMovieDB).toBe(undefined);
    expect(migrationFilm.colour).toBe(undefined);
    expect(migrationFilm.createdAt).toBe(mock.createdAt);
    expect(migrationFilm.updatedAt).toBe(mock.updatedAt);
  });

  it('should set the fields correctly and parse some fields', () => {
    const mock: IMigrationFilm = {
        id: 14,
        nombre: 'Two Night Stand',
        overview: 'Lorem Ipsum',
        imagen: 'https://yts.ag/assets/images/movies/Two_Night_Stand_2014/medium-cover.jpg',
        year: 2014,
        idMovieDB: 23500,
        color: '000000',
        createdAt: '2016-01-15 18:23:31',
        updatedAt: '2016-01-15 18:23:31',
    };
    const migrationFilm = new MigrationFilm(mock);

    expect(migrationFilm.id).toBe(mock.id);
    expect(migrationFilm.name).toBe(mock.nombre);
    expect(migrationFilm.overview).toBe(mock.overview);
    expect(migrationFilm.artwork).toBe(mock.imagen);
    expect(migrationFilm.year).toBe(mock.year);
    expect(migrationFilm.idMovieDB).toBe(mock.idMovieDB);
    expect(migrationFilm.colour).toBe('#' + mock.color);
    expect(migrationFilm.createdAt).toBe(mock.createdAt);
    expect(migrationFilm.updatedAt).toBe(mock.updatedAt);
  });
});