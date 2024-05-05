import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  GetPostsRequest_Query,
  GetPostsResponse,
} from 'src/proto/post/v1/post_pb';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @GrpcMethod('PostService', 'GetPosts')
  getPosts(query: GetPostsRequest_Query): GetPostsResponse {
    const { posts, user } = this.postsService.getPosts({
      userId: query.userId,
    });
    return new GetPostsResponse({
      posts,
      user,
    });
  }
}
