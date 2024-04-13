import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const swaggerConfig = new DocumentBuilder()
                              .setTitle("assembleia api")
                              .setDescription("api do projeto assembleia")
                              .setVersion('1.0.0')
                              .setContact('george', 'http:/api.com.br', 'api')
                              .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, swaggerDoc);

  await app.listen(3000);
}
bootstrap();

