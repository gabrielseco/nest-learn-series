import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Constants } from './../../constants';
import { IFilm } from './interfaces/film';

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
}