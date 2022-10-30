import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('api/v1/user')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  post(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }
}
