import { Module } from "@nestjs/common";
import { HelloWorldModule } from "./routes/helloWorld/helloWorld.module";
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
@Module({
  imports: [
    IMongooseModule,
    RoutesModule,
  ],
})
export class AppModule {
}
