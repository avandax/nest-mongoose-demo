import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import * as log4js from "log4js";
import { IException } from "../exceptions";

const logger = log4js.getLogger("ExceptionFilter:warning");

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let result;
    const status = 200;

    if (exception instanceof IException) {
      result = {
        code: 8000,
        message: exception.message
      };
    } else {  // 特殊错误日志
      logger.error("未定义的错误信息日志:", exception);
      result = {
        code: 8000,
        message: "系统异常，请联系管理员！"
      };
    }

    response
      .status(status)
      .json(result);
  }
}
