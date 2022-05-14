import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get<number>("port"), configService.get<string>("hostname"));
  console.log(`Application is running on: ${await app.getUrl()}, env:${process.env.NODE_ENV}`);
}

bootstrap().catch(console.error);
