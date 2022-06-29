import { map } from "rxjs/operators";
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";

export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

@Injectable()
export class FormatInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(map(data => {
      // 处理常规API数据格式
      const result = {
        code: 0,
        data: null,
        message: "ok"
      };
      if (data) {
        result.data = data;
      }

      return result;
    }));
  }
}
