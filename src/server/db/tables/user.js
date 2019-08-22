import bcrypt from 'bcrypt';
import Sequelize from 'sequelize';

export default sequelize => {
  const User = sequelize.define('user',
    {
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      hash: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    });
  User.encryptPassword = async password => {
    // time to salt & hash or compare increases by a factor of 2 with every increase of 1
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_COST_FACTOR) || 10);
    return await bcrypt.hash(password, salt);
  };
  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.hash);
  };

  return User;
};