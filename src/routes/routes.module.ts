import { Module } from "@nestjs/common";
import { MovieModule } from "./movie/movie.module";
import { HelloWorldModule } from "./helloWorld/helloWorld.module";
import { ServiceModule } from "../modules/service/micro.module";
import { MathModule } from "./math/math.module";
import { BaseModule } from "./base/base.module";

@Module({
  imports: [
    HelloWorldModule,
    ServiceModule,
    MovieModule,
    MathModule,
    BaseModule
  ]
})
export class RoutesModule {
}
