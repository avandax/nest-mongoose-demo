import { createParamDecorator, ExecutionContext, SetMetadata } from "@nestjs/common";

export const Profile = createParamDecorator((key: string, ctx: ExecutionContext) => {
  const { user } = ctx.switchToHttp().getRequest();
  return key ? user[key] : user;
});

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
