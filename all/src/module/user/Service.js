import { Service } from "akjs";

export default class UserService extends Service {
  async getCurrentUser(userId) {
    const result = await this.app.model.user.findOne({
      where: { id: userId },
    });
    console.log("service: ", result);
    return result;
  }
}