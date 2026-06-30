import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    // Makes ConfigService available globally — reads from .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Database — DatabaseService (Drizzle) available globally via @Global()
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
