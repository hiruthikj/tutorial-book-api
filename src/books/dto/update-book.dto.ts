import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class UpdateBookDto {
  @Allow()
  @ApiProperty({
    type: String,
  })
  title: string;

  @ApiProperty({
    type: String,
  })
  @Allow()
  author: string;
}
