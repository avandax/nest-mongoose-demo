import { _, moment } from "../../lib";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RenewalTokenInterceptor implements NestInterceptor {
  constructor(private readonly jwtService: JwtService) {
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<void> {
    return next.handle().pipe(tap(() => {
      const req = context.switchToHttp().getRequest();
      const res = context.switchToHttp().getResponse();
      const { user } = req;
      if (user && user.id && !res.finished) {
        let token = req.headers.token || req.query.token;
        const createdAt = moment.unix(user.iat).format("YYYY-MM-DD");
        if (!moment().isSame(createdAt, "day")) {
          token = this.jwtService.sign(_.omit(user, ["iat", "exp"]));
        }

        res.setHeader("token", token);
      }
    }));
  }
}
