import * as config from "config";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";

const JWT = JwtModule.register({
  secret: config.get("secret"),
  verifyOptions: { ignoreExpiration: true }
});

@Module({
  imports: [
    PassportModule,
    JWT
  ],
  providers: [JwtStrategy],
  exports: [JWT]
})
export class AuthModule {
}
