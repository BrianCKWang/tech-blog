const { Comment } = require('../models');

const CommentData = [
  {
    comment_text: 'This proposal was shelved out of pressure to launch faster, and we later learned that there actually is a lot of unforeseen technical complexity in making this work well.',
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: 'Parallelizable execution',
    post_id: 1,
    user_id: 2
  },
  {
    comment_text: 'EVM environments within their rollups',
    post_id: 2,
    user_id: 3
  },
  {
    comment_text: 'The proposal was shelved in part because it turns out that VM execution is not',
    post_id: 2,
    user_id: 4
  },
  {
    comment_text: '???',
    post_id: 2,
    user_id: 5
  },
];

const seedComments = () => Comment.bulkCreate(CommentData);

module.exports = seedComments;
