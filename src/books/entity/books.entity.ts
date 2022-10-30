import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'book',
})
export class Book extends Model {
  @ApiProperty({
    type: String,
  })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  @Column
  title: string;

  @ApiProperty({
    type: String,
  })
  @Column
  author: string;
}
