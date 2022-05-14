import { Module } from "@nestjs/common";
import { IMongooseModule } from "./modules/imongoose";
import { RoutesModule } from "./routes/routes.module";

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
    IMongooseModule,
    RoutesModule,
  ],
})
export class AppModule {
}
