import BaseController from "../../base/BaseController.js";

export default class PassportController extends BaseController {
  async login(ctx) {
    const user = ctx.request.body;
    const rule = {
      username: "string",
      password: "string",
    };
    const error = this.app.validate(rule, user);
    if (error) {
      this.error(ctx, 400, "校验错误", error);
    } else {
      await this.app.service.Passport.login(user);
      this.success();
    }
  }

  async reg(ctx) {
    const user = ctx.request.body;
    const rule = {
      username: "string",
      password: "string",
      email: "email",
    };
    const error = this.app.validate(rule, user);
    if (error) {
      this.error(ctx, 400, "校验错误", error);
    } else {
      await this.app.service.Passport.reg(user);
      this.success();
    }
  }
}
