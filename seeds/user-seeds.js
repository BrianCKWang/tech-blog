const { User } = require('../models');

const PostData = [
  {
    username: "brianckwang 1",
    password: "password"
  },
  {
    username: 'brianckwang  2',
    password: "password"
  },
  {
    username: 'brianckwang  3',
    password: "password"
  },
  {
    username: 'brianckwang  4',
    password: "password"
  },
  {
    username: 'brianckwang  5',
    password: "password"
  },
  {
    username: 'what',
    password: "password"
  }
];

const seedUsers = () => User.bulkCreate(PostData);

module.exports = seedUsers;
