import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

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

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() bookData: UpdateBookDto) {
    return this.bookService.updateBook(id, bookData);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
