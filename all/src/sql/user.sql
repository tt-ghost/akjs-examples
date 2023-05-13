/* create user table */
CREATE TABLE IF NOT EXISTS user(
  user_id INT UNSIGNED AUTO_INCREMENT COMMENT '用户ID',
  name VARCHAR(50) NOT NULL COMMENT '用户名',
  nickname VARCHAR(50) COMMENT '昵称',
  email VARCHAR(50) NOT NULL COMMENT '邮箱',
  password VARCHAR(20) NOT NULL COMMENT '密码',
  avator VARCHAR(100) COMMENT '用户头像',
  sex VARCHAR(10) DEFAULT 'male' COMMENT '性别',
  birthday TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '出生年月',
  status VARCHAR(20) DEFAULT 'pending' COMMENT '状态',
  create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;