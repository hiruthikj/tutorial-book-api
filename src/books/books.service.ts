import { Body, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  getAllBooks() {
    return [];
  }

  getBook(id: number) {
    return { id };
  }

  createBook(bookData: CreateBookDto) {
    return { bookData };
  }
}
