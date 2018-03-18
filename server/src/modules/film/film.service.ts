import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Constants } from './../../constants';
import { IFilm } from './interfaces/film';
import { MigrationFilm } from './migrations/migration-film.model';
import { MESSAGES } from '../../core/messages';
import { ResponseInterface } from '../../core/interfaces';

@Component()
export class FilmService {
  constructor(
    @Inject(Constants.FilmRepositoryToken) private readonly filmRepository: Repository<IFilm>,
  ){}

  async findAll(): Promise<IFilm[]> {
    const films = await this.filmRepository.find();
    return new Promise<IFilm[]>((resolve, rejected) => {
      resolve(films);
    });
  }

  async insert(migrationFilm: MigrationFilm): Promise<ResponseInterface<IFilm>> {
    const data = await this.filmRepository.save<IFilm>(migrationFilm);
    return new Promise<ResponseInterface<IFilm>>((resolve, rejected) => {
      resolve({
        message: MESSAGES.FILM.MIGRATED,
        data: data,
      });
    });
  }
}