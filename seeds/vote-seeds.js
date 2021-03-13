const { Vote } = require('../models');

const VoteData = [
  {
    post_id: 1,
    user_id: 1
  },
  {
    post_id: 1,
    user_id: 2
  },
  {
    post_id: 2,
    user_id: 3
  },
  {
    post_id: 2,
    user_id: 4
  },
  {
    post_id: 2,
    user_id: 5
  },
];

const seedVotes = () => Vote.bulkCreate(VoteData);

module.exports = seedVotes;
