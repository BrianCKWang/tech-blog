const { Post } = require('../models');

const PostData = [
  {
    title: 'Test 1',
    post_url: 'https://handlebarsjs.com/guide/1',
    user_id: 1
  },
  {
    title: 'Test 2',
    post_url: 'https://handlebarsjs.com/guide/2',
    user_id: 2
  },
  {
    title: 'Test 3',
    post_url: 'https://handlebarsjs.com/guide/3',
    user_id: 3
  },
  {
    title: 'Test 4',
    post_url: 'https://handlebarsjs.com/guide/4',
    user_id: 4
  },
  {
    title: 'Test 5',
    post_url: 'https://handlebarsjs.com/guide/5',
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;
