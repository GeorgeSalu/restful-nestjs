import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloControler } from './hello.controller';
import { HelloService } from './hello.service';
import { PeopleModule } from './people/people.module';

@Module({
    imports: [PeopleModule],
    controllers: [AppController, HelloControler],
    providers: [AppService, HelloService],
})
export class AppModule {}
