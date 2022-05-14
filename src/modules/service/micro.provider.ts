import { ClientProxy, ClientProxyFactory } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";
import { ClientOptions } from "@nestjs/microservices";

export const MicroProvider = {
  provide: "SERVICE",
  inject: [ConfigService],
  useFactory: (configService: ConfigService): ClientProxy => {
    return ClientProxyFactory.create(configService.get<ClientOptions>("tcp-micro-service"));
  }
};
