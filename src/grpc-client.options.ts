import { ReflectionService } from '@grpc/reflection';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['google.type', 'user.v1'],
    protoPath: [
      join(__dirname, '../proto/google/type/datetime.proto'),
      join(__dirname, '../proto/user/v1/user.proto'),
    ],
    loader: {
      includeDirs: [join(__dirname, '../proto')],
    },

    // onLoadPackageDefinition: (pkg, server) => {
    //   new ReflectionService(pkg).addToServer(server);
    // },
  },
};
