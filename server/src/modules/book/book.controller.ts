import { Controller, Get, Post, HttpStatus, Body } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { IBook } from './interfaces/book';
import { MESSAGES } from './../../core/messages';

@ApiUseTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  @ApiResponse({ status: HttpStatus.OK, description: MESSAGES.BOOK.LIST_FOUND})
  async findAll(): Promise<IBook[]> {
    return this.bookService.findAll();
  }
}