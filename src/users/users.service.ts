import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: typeof User,
  ) {}

  async getUser(username: string) {
    const user = await this.usersRepository.findOne({
      where: {
        username,
      },
    });
    return user;
  }

  createUser(userBody: CreateUserDto) {
    const user = new User();
    user.username = userBody.username;
    user.password = userBody.password;

    return user.save();
  }
}
