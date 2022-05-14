import { Module } from "@nestjs/common";
import { IMongooseModule } from "./modules/imongoose/imongoose.module";
import { RoutesModule } from "./routes/routes.module";
import { ConfModule } from "./modules/conf/conf.module";
import { CacheModule } from "./modules/cache/cache.module";

// 配置 todo
// logger todo
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
  ]
})
export class AppModule {
}
