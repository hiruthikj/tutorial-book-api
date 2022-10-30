import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty({
    message: 'Title should not be empty',
  })
  title: string;

  @ApiProperty({
    type: String,
  })
  @Allow()
  author: string;
}
