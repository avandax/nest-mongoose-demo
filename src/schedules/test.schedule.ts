import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { getLogger } from "log4js";
import { moment } from "../lib";
import { ScheduleService } from "./schedule.service";

@Injectable()
export class TestSchedule {
  #logger = getLogger(TestSchedule.name);

  constructor(private readonly sch: ScheduleService) {
  }

  @Cron(CronExpression.EVERY_5_SECONDS, { name: "EVERY_5_SECONDS" })
  handle() {
    this.#logger.info(moment().format(), this.handle.name);

    const schedule_name = `test addCronJob-${moment().format()}`;
    this.sch.addCronJob(schedule_name, 10);
  }
}