import { Module } from "@nestjs/common";
import { TestSchedule } from "./test.schedule";
import { ScheduleModule as NestSchedule } from "@nestjs/schedule";

@Module({
  imports: [NestSchedule.forRoot()],
  providers: [TestSchedule]
})
export class ScheduleModule {}