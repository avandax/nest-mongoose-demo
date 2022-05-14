import { Inject, Injectable, OnApplicationBootstrap, OnApplicationShutdown } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { getLogger, Logger } from "log4js";

@Injectable()
export class MicroService implements OnApplicationBootstrap, OnApplicationShutdown {
  private readonly logger: Logger = getLogger(MicroService.name);

  constructor(@Inject("SERVICE") readonly client: ClientProxy) {
  }

  async onApplicationBootstrap(): Promise<void> {
    return this.client.connect()
      .then(() => this.logger.info("SERVICE IS CONNECTED"))
      .catch((e) => this.logger.error(`SERVICE CONNECTED FAILED ,ERR MSG:${e.message}`));
  }

  async onApplicationShutdown(): Promise<void> {
    return this.client.close()
      .then(() => this.logger.log("SERVICE IS SHUTDOWN"));
  }
}