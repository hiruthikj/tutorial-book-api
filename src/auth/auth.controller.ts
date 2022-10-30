import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //   @UseGuards(AuthGuard('local'))
  @Get('/login')
  async login(@Body() user: CreateUserDto) {
    return this.authService.login(user);
  }
}
