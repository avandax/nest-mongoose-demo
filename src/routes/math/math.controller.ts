import { Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Controller("math")
export class MathController {
  constructor(@Inject("SERVICE") readonly serviceProvider: ClientProxy) {
  }

  @Post()
  sum(): Observable<number> {
    return this.serviceProvider.send<number>({ cmd: "sum" }, [1, 2, 3]);
  }
}
