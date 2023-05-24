import bodyParser from "koa-bodyparser";

export default (app) => {
  const config = app.config.bodyParser || {};
  return bodyParser(config);
};
