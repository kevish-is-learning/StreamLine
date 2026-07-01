import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Makes ConfigService available globally — reads from .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Database — DatabaseService (Drizzle) available globally via @Global()
    DatabaseModule,

    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
