import { Test, TestingModule } from "@nestjs/testing";
import { HelloWorldController } from "../../src/routes/helloWorld/helloWorld.controller";
import { HelloWorldModule } from "../../src/routes/helloWorld/helloWorld.module";

describe("AppController", () => {
  let appController: HelloWorldController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HelloWorldModule]
    }).compile();

    appController = app.get<HelloWorldController>(HelloWorldController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.hello()).toBe("Hello World!");
    });
  });
});
