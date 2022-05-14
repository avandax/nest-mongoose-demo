import { Module } from "@nestjs/common";
import { MovieModule } from "./movie/movie.module";
import { HelloWorldModule } from "./helloWorld/helloWorld.module";

@Module({
  imports: [
    HelloWorldModule,
    MovieModule,
  ],
})
export class RoutesModule {
}