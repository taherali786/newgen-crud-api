import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global prefix
  app.setGlobalPrefix('api/v1');
  const PORT = process.env.PORT || 3000;
  console.log(`Server is running on PORT ${PORT}`);
  
  await app.listen(PORT);
}
bootstrap();
