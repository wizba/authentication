import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swaggar hub connections
  const options = new DocumentBuilder()
    .setTitle('Edulane')
    .setDescription('The Edulane API')
    .setVersion('1.0')
    .addTag('edulate')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
