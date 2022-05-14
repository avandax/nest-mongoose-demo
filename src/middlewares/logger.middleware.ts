import * as log4js from "log4js";

const { NODE_ENV } = process.env;

export const LoggerMiddleware = log4js.connectLogger(log4js.getLogger("HTTP"), {
  level: "auto",
  format(req, _, format) {
    if ((/^\/swagger/).test(req.path)) {
      // 过滤swagger日志
      return;
    }


    const str = ":remote-addr - \":method :url\" :status \":referrer\" \":user-agent\"";
    if (NODE_ENV !== "production" && Object.keys(req.body).length) {
      const body = JSON.stringify(req.body, null, 2);
      return format(`${str} Body => ${body}`);
    } else {
      return format(str);
    }
  }
});
