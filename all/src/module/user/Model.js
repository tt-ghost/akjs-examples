import { Model } from 'akjs'
// export default (app) => {
//   const { DataTypes } = app.Sequelize;
//   const attrs = {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     username: DataTypes.STRING,
//     birthday: DataTypes.DATE,
//     status: DataTypes.STRING,
//     name: DataTypes.STRING,
//     nickname: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     avator: DataTypes.STRING,
//     sex: DataTypes.STRING,
//   };

//   const opts = { tableName: "user" };

//   return app.defineModel("user", attrs, opts);
// };
export default class UserModel extends Model {
  constructor() {
    const { DataTypes } = thia.app.Sequelize;
    const { INTEGER,  STRING } = DataTypes
    const attrs = {
      id: {
        type: INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      username: STRING,
      birthday: DATE,
      status: STRING,
      name: STRING,
      nickname: STRING,
      email: STRING,
      password: STRING,
      avator: STRING,
      sex: STRING,
    };

    const opts = { tableName: "user" };

    return thsi.app.model.define("user", attrs, opts);
  }
}
