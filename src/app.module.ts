import { Module, ValidationPipe } from "@nestjs/common";
import { IMongooseModule } from "./modules/imongoose/imongoose.module";
import { RoutesModule } from "./routes/routes.module";
import { ConfModule } from "./modules/conf/conf.module";
import { CacheModule } from "./modules/cache/cache.module";
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ScheduleModule } from "./schedules/schedule.module";
import { JwtAuthGuard } from "./shared/jwtAuth.guard";
import { FormatInterceptor } from "./shared/interceptors/format.interceptor";
import { RenewalTokenInterceptor } from "./shared/interceptors/token.interceptor";
import { GlobalExceptionFilter } from "./shared/filters/globalException.filter";
import { HttpExceptionFilter } from "./shared/filters/httpException.filter";
import { AuthModule } from "./modules/auth/auth.module";

// logger
// interceptor
// jwt
// exception filter
// format
// mongo
// mysql TODO
// redis TODO
// nacos TODO
// Moleculer TODO
// bull  TODO
// schedules
// pm2
// docker
@Module({
  imports: [
    ConfModule,
    AuthModule,
    IMongooseModule,
    CacheModule,
    RoutesModule,
    ScheduleModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        skipMissingProperties: false,
        dismissDefaultMessages: true,
        validationError: { target: false }
      })
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: FormatInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RenewalTokenInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RenewalTokenInterceptor
    },
    {
      provide: APP_FILTER,
      useValue: new GlobalExceptionFilter()
    },
    {
      provide: APP_FILTER,
      useValue: new HttpExceptionFilter()
    }
  ]

})
export class AppModule {
}
