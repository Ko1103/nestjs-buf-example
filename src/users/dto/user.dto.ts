import { DateTime } from 'proto/google/type/datetime_pb';
import { User } from 'proto/user/v1/user_pb';

export class UserDto extends User {
  userId: string;
  name: string;
  createdAt: DateTime;
}
