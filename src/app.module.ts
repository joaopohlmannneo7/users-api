import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResponseInterceptor } from './core/http/transform-response-interceptors';
import { IsUserAlreadyExist } from './users/is-user-already-exists.validator';
import { UsersModule } from './users/users.module';


@Module({
  imports: [UsersModule, ],
  controllers: [],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: TransformResponseInterceptor,
  },


],
})

export class AppModule {}
