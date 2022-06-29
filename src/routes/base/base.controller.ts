import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { BaseService } from "./base.service";
import { LoginDto } from "./base.dto";
import { Profile, Public } from "../../shared/decorators";
import { IException } from "../../shared/exceptions";

@Controller()
export class BaseController {
  constructor(private readonly service: BaseService) {
  }

  /**
   * @api {POST} /login [POST]         登录
   * @apiGroup Banner
   * @apiParam {String} phone
   * @apiParam {String} password
   */
  @Public()
  @Post("login")
  @HttpCode(HttpStatus.OK)
  login(@Body() body: LoginDto): string {
    return this.service.login(body);
  }

  @Get("profile")
  profile(@Profile() user: IProfile): IProfile {
    return user;
  }
}
