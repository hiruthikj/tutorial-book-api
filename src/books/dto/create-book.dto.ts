import { Allow, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({
    message: 'Title should not be empty',
  })
  title: string;

  @Allow()
  author: string;
}
