import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { bookProviders } from './book.providers';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService, ...bookProviders],
  imports: [DatabaseModule],
})
export class BooksModule {}
