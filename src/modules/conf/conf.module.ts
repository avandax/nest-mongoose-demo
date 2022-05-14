import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "./configuration";

const conf = ConfigModule.forRoot({
  isGlobal: true,
  load: [configuration]
});

@Module({
  imports: [conf],
  exports: [conf]
})
export class ConfModule {
}