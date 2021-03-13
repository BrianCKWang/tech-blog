const { Comment } = require('../models');

const CommentData = [
  {
    comment_text: 'Test comment 1',
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: 'Test comment 2',
    post_id: 1,
    user_id: 2
  },
  {
    comment_text: 'Test comment 3',
    post_id: 2,
    user_id: 3
  },
  {
    comment_text: 'Test comment 4',
    post_id: 2,
    user_id: 4
  },
  {
    comment_text: 'Test comment 5',
    post_id: 2,
    user_id: 5
  },
];

const seedComments = () => Comment.bulkCreate(CommentData);

module.exports = seedComments;
