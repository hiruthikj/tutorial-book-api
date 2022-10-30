import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty({
    message: 'Username should not be empty',
  })
  username: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty({
    message: 'Password should not be empty',
  })
  password: string;
}
