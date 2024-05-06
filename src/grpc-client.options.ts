// import { ReflectionService } from '@grpc/reflection';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['google.type', 'user.v1', 'post.v1'],
    protoPath: [
      join(__dirname, '../proto/google/type/datetime.proto'),
      join(__dirname, '../proto/user/v1/user.proto'),
      join(__dirname, '../proto/post/v1/post.proto'),
    ],
    loader: {
      includeDirs: [join(__dirname, '../proto')],
    },
    url: '0.0.0.0:5000',

    // onLoadPackageDefinition: (pkg, server) => {
    //   new ReflectionService(pkg).addToServer(server);
    // },
  },
};
