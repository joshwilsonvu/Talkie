const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Posts = sequelize.define('post',
    {
      // The unique ID of the post
      id: {
        // autoIncrement can be used to create auto_incrementing integer columns
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
      },
      // The poster
      username: {
        type: Sequelize.DataTypes.STRING,
        // FOREIGN KEY
        references: {
          model: 'users',
          key: 'username'
        }
      },
      text: {
        type: Sequelize.DataTypes.TEXT
      }
    },
    {
      timestamps: true,
      createdAt: 'date', // rename
      updatedAt: true
    });
  return Posts;
};