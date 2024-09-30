import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [],
})
export class AppModule { }
