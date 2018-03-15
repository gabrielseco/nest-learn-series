import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Constants } from './../../constants';
import { IBook } from './interfaces/book';

@Component()
export class BookService {
  constructor(
    @Inject(Constants.BookRepositoryToken) private readonly bookRepository: Repository<IBook>,
  ){}

  async findAll(): Promise<IBook[]> {
    const books = await this.bookRepository.find();
    return new Promise<IBook[]>((resolve, rejected) => {
      resolve(books);
    });
  }
}