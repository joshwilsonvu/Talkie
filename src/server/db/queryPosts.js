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

  recentPosts: async (Post, limit, beginID = undefined, offset = undefined) => {
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
    if (offset !== undefined) {
      query.offset = offset;
    }
    const posts = await Post.findAll(query);
    return posts.map(filterPost);
  }
};