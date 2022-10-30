import { Allow } from 'class-validator';

export class UpdateBookDto {
  @Allow()
  title: string;

  @Allow()
  author: string;
}
