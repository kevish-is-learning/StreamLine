import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    // Makes ConfigService available globally — reads from .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Database — PrismaService available globally via @Global()
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
