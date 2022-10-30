import { Sequelize } from 'sequelize-typescript';
import { Book } from 'src/books/entity/books.entity';
import { User } from 'src/users/entity/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'books_db',
      });
      sequelize.addModels([Book, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
