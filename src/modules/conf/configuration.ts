import * as config from "config";

export default () => {
  return config.util.toObject();
};