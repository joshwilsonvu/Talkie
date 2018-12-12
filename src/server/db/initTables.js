const Sequelize = require('sequelize');
const Promise = Sequelize.Promise;

const UserTable = require('./tables/user');
const PostTable = require('./tables/post');

module.exports = async () => {
  const sequelize = new Sequelize(process.env.sqlUri, {
    logging: process.env.sqlLog === 'true'
  });
  await sequelize.authenticate();
  const User = UserTable(sequelize);
  const Post = PostTable(sequelize);
  await sequelize.sync({ force: true });
  return {
    User: User,
    Post: Post
  }
};

