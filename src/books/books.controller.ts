import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entity/books.entity';

@Controller('/api/v1/book')
@ApiTags('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  @ApiOkResponse({ description: 'Operation Successful', type: [Book] })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  getAll() {
    return this.bookService.getAllBooks();
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'Operation Successful', type: Book })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  get(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Post('/')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Book,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  post(@Body() bookData: CreateBookDto) {
    return this.bookService.createBook(bookData);
  }

  @Patch('/:id')
  @ApiOkResponse({ description: 'Operation Successful', type: Book })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  patch(@Param('id') id: string, @Body() bookData: UpdateBookDto) {
    return this.bookService.updateBook(id, bookData);
  }

  @Delete('/:id')
  @ApiOkResponse({ description: 'Operation Successful', type: Book })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  delete(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
