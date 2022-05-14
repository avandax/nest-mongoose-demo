import { Global, Module } from "@nestjs/common";
import { MicroProvider } from "./micro.provider";
import { MicroService } from "./micro.service";

@Global()
@Module({
  providers: [MicroProvider, MicroService],
  exports: [MicroProvider]
})
export class ServiceModule {
}