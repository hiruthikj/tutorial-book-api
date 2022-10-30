import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('/api/v1/book')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get('/')
  getAll() {
    return this.bookService.getAllBooks();
  }

  @Get('/:id')
  get(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Post('/')
  post(@Body() bookData: CreateBookDto) {
    return this.bookService.createBook(bookData);
  }
}
