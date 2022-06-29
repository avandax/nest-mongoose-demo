import { Module } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { BaseService } from "./base.service";
import { AuthModule } from "../../modules/auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [BaseController],
  providers: [BaseService]
})
export class BaseModule {
}
