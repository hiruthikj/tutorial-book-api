import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.getUser(username);
    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: CreateUserDto) {
    const payload = { sub: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
