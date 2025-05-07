import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configure CORS
  app.enableCors({
    origin: [
      'https://pharmacy-application.netlify.app',
      'http://localhost:5173', // For local development
      'http://localhost:3000'  // For local development
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  });

  const PORT = process.env.PORT || 3004; 
  
  const config = new DocumentBuilder()
    .setTitle('Pharmacy System API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controllers
    )
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(PORT)
  console.log(`Application is running on port ${PORT}`);
}
bootstrap();
