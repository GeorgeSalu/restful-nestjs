import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // incluindo validação de dados, instalar dependências class-validator e class-transformer
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
