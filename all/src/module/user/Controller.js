import BaseController from "../../base/BaseController.js";

export default class UserController extends BaseController {
  /**
   * get current user
   */
  async getCurrent(ctx) {
    console.log("cookies: token ", ctx.cookies.get("token"));
    const error = this.app.validate({ name: "string" }, { name: 2 });
    const current = await this.app.service.User.getCurrentUser(1);

    console.log("current: ", current);
    if (error) {
      this.error(ctx, 400, "校验错误", error);
    } else {
      this.success(ctx);
    }

    // const [err, result] = await G.ato(service.user.getCurrentUser());
    // G.res(err, ctx, () => {
    //   ctx.body = {
    //     data: result,
    //   };
    // });
  }

  /**
   * 通过userId获取用户信息
   */
  async getById(ctx) {
    const { userId } = ctx.params;
    const rule = {
      userId: 'id'
    }
    const error = this.app.validate(rule, { userId })
    if (error) {
      this.error(ctx, 400, '校验错误', error)
    } else {
      const result = await this.app.service.User.getUserById(userId)
      this.success(ctx, result)
    }
  }

  /**
   * add user
   */
  async create(ctx) {
    // ctx.request
    const user = ctx.request.body;
    const [err, result] = await G.ato(this.app.service.User.addUser(user));
    G.res(err, ctx, () => {
      ctx.body = {
        data: result,
      };
    });
  }

  /**
   * update user
   */
  async update(ctx) {
    ctx.body = { status: 200 };
  }
}
