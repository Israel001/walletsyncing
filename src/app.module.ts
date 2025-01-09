import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestLoggerMiddleware } from './middleware/request-logger-middleware';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env.validator';
import { AppController } from './app.controller';
import { SharedModule } from './modules/shared.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate, envFilePath: '.env' }),
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
