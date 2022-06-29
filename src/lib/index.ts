import * as Moment from "moment";
import * as MR from "moment-range";
import * as _ from "lodash";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";
export const moment = MR.extendMoment(Moment);
export { _ };
