import Sequelize from "sequelize";

export default {
  authenticateUser: async (User, username, password) => {
    username = String(username);
    password = String(password);
    const user = await User.findByPk(username);
    let authenticated = false;
    if (user !== null) {
      // If the username is taken, compare the password to the stored hash
      authenticated = await user.comparePassword(password);
    } else {
      // If the username is unused, create a user with the given password
      authenticated = true;
      const hash = await User.encryptPassword(password);
      await User.create({
        username: username,
        hash: hash
      });
    }
    return authenticated;
  }
};