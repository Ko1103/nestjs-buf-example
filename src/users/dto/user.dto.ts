import { DateTime } from 'src/proto/google/type/datetime_pb';
import { User } from 'src/proto/user/v1/user_pb';

export class UserDto extends User {
  userId: string;
  name: string;
  createdAt: DateTime;
}
