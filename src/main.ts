import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import * as log4js from "log4js";
import { getLogger } from "log4js";
import { GlobalExceptionFilter } from "./shared/filters/globalException.filter";
import { HttpExceptionFilter } from "./shared/filters/httpException.filter";
import { JwtAuthGuard } from "./shared/jwtAuth.guard";
import { Reflector } from "@nestjs/core";
import { FormatInterceptor } from "./shared/interceptors/format.interceptor";
import { RenewalTokenInterceptor } from "./shared/interceptors/token.interceptor";
import { JwtService } from "@nestjs/jwt";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const configService = app.get<ConfigService>(ConfigService);

  // 日志中间件
  log4js.configure(configService.get("log4js"));
  const logger = getLogger("bootstrap");
  app.use(LoggerMiddleware);
  app.useGlobalFilters(new GlobalExceptionFilter(), new HttpExceptionFilter());
  app.useGlobalGuards(new JwtAuthGuard(new Reflector()));
  app.useGlobalInterceptors(new FormatInterceptor(), new RenewalTokenInterceptor(new JwtService()));

  await app.listen(configService.get<number>("port"), configService.get<string>("hostname"));
  logger.info(`Application is running on: ${await app.getUrl()}, env:${process.env.NODE_ENV}`);
}

bootstrap().catch(console.error);
