import { Controller, Get, Post, HttpStatus, Body } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { FilmService } from './film.service';
import { IFilm } from './interfaces/film';
import { MESSAGES } from './../../core/messages';
import { Migration } from './migrations/migration';
import * as data from './data/films.json';

@ApiUseTags('films')
@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  @ApiResponse({ status: HttpStatus.OK, description: MESSAGES.FILM.LIST_FOUND})
  async findAll(): Promise<IFilm[]> {
    return this.filmService.findAll();
  }

  @Get('migration')
  async startMigration() {
    const migration: Migration = new Migration(data as any, this.filmService);

    migration.init();
  }

}