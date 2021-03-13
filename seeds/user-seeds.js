const { User } = require('../models');

const PostData = [
  {
    username: "brianckwang 1",
    email: "brian.ck.wang.1@gmail.com",
    password: "password"
  },
  {
    username: 'brianckwang  2',
    email: 'brian.ck.wang.2@gmail.com',
    password: "password"
  },
  {
    username: 'brianckwang  3',
    email: 'brian.ck.wang.3@gmail.com',
    password: "password"
  },
  {
    username: 'brianckwang  4',
    email: 'brian.ck.wang.4@gmail.com',
    password: "password"
  },
  {
    username: 'brianckwang  5',
    email: 'brian.ck.wang.5@gmail.com',
    password: "password"
  },
  {
    username: 'what',
    email: 'what@gmail.com',
    password: "password"
  }
];

const seedUsers = () => User.bulkCreate(PostData);

module.exports = seedUsers;
