import { Module } from "@nestjs/common";
import { TestSchedule } from "./test.schedule";
import { ScheduleModule as NestSchedule } from "@nestjs/schedule";
import { ScheduleService } from "./schedule.service";

@Module({
  imports: [NestSchedule.forRoot()],
  providers: [
    ScheduleService,
    TestSchedule
  ]
})
export class ScheduleModule {}