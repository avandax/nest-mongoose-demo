import { Injectable } from "@nestjs/common";
import { LoginDto } from "./base.dto";
import { JwtService } from "@nestjs/jwt";
import { _ } from "lib";

@Injectable()
export class BaseService {
  constructor(private readonly jwt: JwtService) {
  }

  /**
   * It takes a LoginDto object as an argument, and returns a string
   * @param {LoginDto} body - The body of the request.
   * @returns A JWT token
   */
  login(body: LoginDto): string {
    return this.jwt.sign(_.omit(body, "password"));
  }
}
