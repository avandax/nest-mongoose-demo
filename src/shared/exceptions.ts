import { HttpException } from "@nestjs/common";

export class IException extends HttpException {
  constructor(code: number | string);
  constructor(code: number, message: string);
  constructor(code: number | string, message?: string) {
    super(typeof code === "string" ? code : message, typeof code === "number" ? code : 8000);
    this.name = "IException";
  }
}
