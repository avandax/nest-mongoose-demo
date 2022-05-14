import { Injectable } from "@nestjs/common";
import { SchedulerRegistry } from "@nestjs/schedule";
import { CronJob } from "cron";
import { getLogger, Logger } from "log4js";

/**
 * 动态job
 */
@Injectable()
export class ScheduleService {
  private readonly logger: Logger = getLogger(ScheduleService.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {
  }

  /**
   * 动态新增job
   * @param name
   * @param seconds
   */
  addCronJob(name: string, seconds: number) {
    const job = new CronJob(`${seconds} * * * * *`, () => {
      this.logger.warn(`time (${seconds}) for job ${name} to run!`);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    this.logger.warn(`job ${name} added for each minute at ${seconds} seconds!`
    );
  }
}