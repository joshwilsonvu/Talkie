const Sequelize = require('sequelize');
const Promise = Sequelize.Promise;

const UserTable = require('./tables/user');
const PostTable = require('./tables/post');

module.exports = async () => {
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

