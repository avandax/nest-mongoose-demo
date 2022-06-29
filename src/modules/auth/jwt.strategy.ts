import * as config from "config";
import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: config.get("secret"),
      ignoreExpiration: false,
      passReqToCallback: true,
      jwtFromRequest(req) {
        return req.headers.token || req.query.token;
      }
    });
  }

  async validate(_req: Request, payload: IProfile): Promise<IProfile> {
    const { id, version, dept_id } = payload;
    if (id) {
      if (!Number.isInteger(version) || !dept_id) {
        throw new UnauthorizedException();
      }
    }

    return payload;
  }
}
