import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
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
  username: string;

  @ApiProperty({
    type: String,
  })
  @Column
  password: string;
}
