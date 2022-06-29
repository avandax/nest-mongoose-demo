import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";

interface DtoException {
  message: string[];
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let status = exception.getStatus();

    const result = {
      code: exception.getStatus(),
      data: null,
      message: exception.message
    };

    if (!Object.values(HttpStatus).includes(status)) {
      status = 200;
    } else if ([HttpStatus.UNAUTHORIZED, HttpStatus.FORBIDDEN].includes(status)) {
      status = 200;
      result.code = 1010;
    } else if (status === HttpStatus.BAD_REQUEST) {
      status = 200;
      result.code = 1001;
      const res = exception.getResponse() as DtoException;
      const message = res?.message?.filter(x => x);
      result.message = message?.[0] || "参数错误";
    }

    exception.initMessage();
    response
      .status(status)
      .json(result);
  }
}
