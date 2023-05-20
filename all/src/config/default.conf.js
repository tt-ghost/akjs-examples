import path from "path";

export default (app) => {
  const { config } = app;
  // const { NODE_ENV } = process.env;
  config.project = {};
  // config.db = {};
  config.router = {
    prefix: "/api",
  };
  config.env = {
    // // 后台启动端口
    // NODE_ENV,
    // IS_DEV: NODE_ENV === "dev",
    // IS_TEST: NODE_ENV === "test",
    // IS_STAGE: NODE_ENV === "stage",
    // IS_PROD: NODE_ENV === "prod",
  };
};
