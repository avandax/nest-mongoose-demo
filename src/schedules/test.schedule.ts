import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { getLogger } from "log4js";
import { moment } from "../lib";

@Injectable()
export class TestSchedule {
  #logger = getLogger(TestSchedule.name);

  @Cron(CronExpression.EVERY_5_SECONDS, { name: "EVERY 5 SECONDS" })
  handle() {
    this.#logger.info(moment().format(), this.handle.name);
  }
}