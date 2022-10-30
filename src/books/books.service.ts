import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entity/books.entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private readonly booksRepository: typeof Book,
  ) {}

  getAllBooks() {
    return this.booksRepository.findAll();
  }

  async getBook(id: string) {
    const book = await this.booksRepository.findByPk(id);

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  createBook(bookData: CreateBookDto) {
    const book = new Book();
    book.title = bookData.title;
    book.author = bookData.author;
    return book.save();
  }

  async updateBook(id: string, bookData: UpdateBookDto) {
    const book = await this.booksRepository.findByPk(id);

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book.set(bookData);
  }

  async deleteBook(id: string) {
    const book = await this.booksRepository.findByPk(id);

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    return book.destroy();
  }
}
