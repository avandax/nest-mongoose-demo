import { Test, TestingModule } from "@nestjs/testing";
import { HelloWorldController } from "../../src/routes/helloWorld/helloWorld.controller";
import { HelloWorldService } from "../../src/routes/helloWorld/helloWorld.service";

describe("AppController", () => {
  let appController: HelloWorldController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
      providers: [HelloWorldService]
    }).compile();

    appController = app.get<HelloWorldController>(HelloWorldController);
  });

  describe("root", () => {
    it("should return \"Hello World!\"", () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
