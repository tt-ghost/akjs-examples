import session from "koa-session";
import SQLStore from "koa-mysql-session";
// import db from "../config/db.js";

// 配置 session 中间件
export default (app) => {
  const sessionConf = app.config.session || {}
  const dbConf = app.config.db || {}
  const {database, user, password, option } = dbConf
  const { port, host, connectTimeout } = option || {}
  const storeConf = {
    database,
    user,
    password,
    port,
    host,
    connectTimeout,
  }
  app.use(
    session(
      {
        ...sessionConf,
        store: new SQLStore(storeConf),
      },
      app
    )
  );
};
