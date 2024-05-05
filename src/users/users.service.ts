import { Injectable } from '@nestjs/common';
import { DateTime } from 'src/proto/google/type/datetime_pb';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  getUser(query: { id: string }): null | UserDto {
    if (query.id === '1') {
      return null;
    }
    return new UserDto({
      userId: query.id,
      name: 'User 1',
      createdAt: new DateTime(),
    });
  }
}
