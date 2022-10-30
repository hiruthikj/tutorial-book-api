import { Book } from './entity/books.entity';

export const bookProviders = [
  {
    provide: 'BOOKS_REPOSITORY',
    useValue: Book,
  },
];
