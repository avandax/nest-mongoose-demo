import { Test } from "@nestjs/testing";
import { getLogger, Logger } from "log4js";
import { Sequelize } from "sequelize";
import { Umzug, SequelizeStorage } from "umzug";
import { SequelizeOptions } from "sequelize-typescript";

describe("migration", () => {
  let umzug: Umzug;
  let sequelize: Sequelize;
  const logger: Logger = getLogger("migration");
  before(async () => {
    await Test.createTestingModule({
      imports: []
    }).compile();

    const options: SequelizeOptions = {
      dialect: "mysql",
      host: "host",
      port: 3306,
      username: "mysql.username",
      password: "mysql.password",
      database: "mysql.name"
    }
    const sequelize = new Sequelize(options);

    umzug = new Umzug({
      migrations: { glob: "migrations/mysql/*.js" },
      context: sequelize.getQueryInterface(),
      storage: new SequelizeStorage({ sequelize }),
      logger
    });
  });

  it("migrate:up", async () => {
    const migrations = await umzug.up({ migrations: ["test.js"] });
    logger.warn("up migrations", migrations);
  });

  it("migrate:down", async () => {
    const migrations = await umzug.down({ migrations: ["test.js"] });
    logger.warn("down migrations", migrations);
  });

  after(() => {
    sequelize && sequelize.close().then(() => logger.info("db closed"));
  });
});
