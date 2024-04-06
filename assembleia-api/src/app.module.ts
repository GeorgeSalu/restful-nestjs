import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloControler } from './hello.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloControler],
  providers: [AppService],
})
export class AppModule {}
