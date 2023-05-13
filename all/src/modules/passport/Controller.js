import { Controller } from "akjs";
export default class PassportController extends Controller {
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
