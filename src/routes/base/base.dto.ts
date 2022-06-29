import { IsDefined, IsMobilePhone, IsString } from "class-validator";

export class LoginDto {
  @IsDefined()
  @IsString()
  @IsMobilePhone("zh-CN")
  phone: string;

  @IsDefined()
  @IsString()
  password: string;
}
