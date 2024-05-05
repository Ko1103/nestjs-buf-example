import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  getPosts(query: { userId: string }): { posts: PostDto[]; user: UserDto } {
    const user = this.usersService.getUser({ id: query.userId });
    if (!user) {
      throw new NotFoundException();
    }
    return {
      posts: [
        new PostDto({
          id: '1',
          title: 'Post 1',
          content: 'Content 1',
          userId: query.userId,
        }),
      ],
      user,
    };
  }
}
