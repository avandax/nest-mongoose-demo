import { Module } from "@nestjs/common";
import { ConfModule } from "../conf/conf.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";

const mongo = MongooseModule.forRootAsync({
  imports: [ConfModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>("mongodb")
  })
});

@Module({
  imports: [mongo],
  exports: [mongo]
})
export class IMongooseModule {
}
