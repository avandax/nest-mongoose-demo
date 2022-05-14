import { Module } from "@nestjs/common";
import { HelloWorldController } from "./helloWorld.controller";
import { HelloWorldService } from "./helloWorld.service";

@Module({
  controllers: [HelloWorldController],
  providers: [HelloWorldService],
})
export class HelloWorldModule {
}
