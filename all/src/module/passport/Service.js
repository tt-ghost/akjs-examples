import { Service } from "akjs";
/**
 * passport service
 */
export default class PassportService extends Service {

  async login({ username, pwd }) {
    // const rules = [
    //   { rule: !username, message: "username未传" },
    //   { rule: !pwd, message: "pwd未传" },
    // ];
    // return this.$validate(rules, () => this.$model.login({ username, pwd }));
    const result = await this.app.model.Passport.findOne({
      where: { username },
    });
    if (!result) return
  }

  /**
   * 注册用户
   * @param {String} param0 用户名
   */
  async reg({ username, pwd }) {
    // const rules = [
    //   { rule: !username, message: "username未传" },
    //   { rule: !pwd, message: "pwd未传" },
    // ];
    // return this.$validate(rules, () => this.$model.reg({ username, pwd }));
    const result = await this.app.model.Passport.findOne({
      where: { username },
    });

    if (result) return console.log('已经存在该用户')

    const one = await this.app.model.Passport.create({
      where: { username, pwd },
    });
    return one
  }
}
