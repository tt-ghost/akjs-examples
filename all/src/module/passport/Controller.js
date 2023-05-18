import BaseController from "../../base/BaseController.js";
export default class PassportController extends BaseController {
  async login(ctx) {
    ctx.body = {
      login: true,
    };
  }

  async reg(ctx) {
    ctx.body = {
      reg: true,
    };
  }
}
