import { Controller, Get } from "@nestjs/common";
import { HelloWorldService } from "./helloWorld.service";

@Controller()
export class HelloWorldController {
  constructor(private readonly service: HelloWorldService) {
  }

  @Get()
  hello(): string {
    return this.service.getHello();
  }
}
