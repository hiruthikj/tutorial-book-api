import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'book',
})
export class Book extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  title: string;

  @Column
  author: string;
}
