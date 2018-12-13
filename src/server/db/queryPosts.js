const Sequelize = require('sequelize');

const filterPost = post => ({
  id: post.id,
  username: post.username,
  text: post.text,
  date: post.date
});

module.exports = {
  filterPost: filterPost,

  createPost: async (Post, username, text) => {
    const post = await Post.create({
      username: username,
      text: text
    });
    return filterPost(post);
  },

  recentPosts: async (Post, limit, beginID) => {
    const query = {
      order: [
        ['id', 'DESC']
      ],
      limit: limit
    };
    if (beginID !== undefined) {
      query.where = {
        id: {
          [Sequelize.Op.gte]: beginID
        }
      };
    }
    const posts = await Post.findAll(query);
    return posts.map(filterPost);
  }
};