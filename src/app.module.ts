import { Module, ValidationPipe } from "@nestjs/common";
import { IMongooseModule } from "./modules/imongoose/imongoose.module";
import { RoutesModule } from "./routes/routes.module";
import { ConfModule } from "./modules/conf/conf.module";
import { CacheModule } from "./modules/cache/cache.module";
import { APP_PIPE } from "@nestjs/core";

// 配置
// logger
// interceptor todo
// jwt todo
// exception filter todo
// format todo
// mongo todo
// mysql todo
// redis todo
// nacos todo
// Moleculer todo
// bull
// schedules
// pm2
// docker
@Module({
  imports: [
    ConfModule,
    IMongooseModule,
    CacheModule,
    RoutesModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        skipMissingProperties: false,
        dismissDefaultMessages: true,
        validationError: { target: false }
      })
    }
  ]
})
export class AppModule {
}
