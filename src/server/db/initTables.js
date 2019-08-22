import Sequelize from "sequelize";

const Promise = Sequelize.Promise;

import UserTable from './tables/user';
import PostTable from './tables/post';

export default async () => {
  const sequelize = new Sequelize(process.env.SQL_URI, {
    logging: false
  });
  await sequelize.authenticate();
  const User = UserTable(sequelize);
  const Post = PostTable(sequelize);
  await sequelize.sync({force: process.env.NODE_ENV === 'development'});
  return {
    User: User,
    Post: Post
  };
};

