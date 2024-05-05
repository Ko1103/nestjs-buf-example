import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DateTime } from 'src/proto/google/type/datetime_pb';
import { GetUserResponse } from 'src/proto/user/v1/user_pb';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  @GrpcMethod('UserService', 'GetUser')
  getUser(): GetUserResponse {
    return new GetUserResponse({
      user: new UserDto({
        userId: '1',
        name: 'John',
        createdAt: new DateTime(),
      }),
    });
  }
}
