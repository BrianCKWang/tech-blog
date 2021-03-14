const { Post } = require('../models');

const PostData = [
  {
    title: 'Look who went on their first walk today',
    post_content: 'This was my first thought and its probably the vet tech in me. This is the time of year that clinics see an increase of parvo cases. I am not sure if it is because it is nicer and people start going out more or what. Parvo can live on surfaces and in the ground for 6 months to a year, so avoid taking your pets to dog parks, stores, or anywhere else that other dogs may have been. Vaccinations should be completed at the appropriate times recommended by your vet before you take your pet anywhere.',
    user_id: 1
  },
  {
    title: 'Some patients need more reassurance than others. This guy gets most of his visit done while in my lap. I don’t mind. ?',
    post_content: 'This was my first thought and its probably the vet tech in me. This is the time of year that clinics see an increase of parvo cases. I am not sure if it is because it is nicer and people start going out more or what. Parvo can live on surfaces and in the ground for 6 months to a year, so avoid taking your pets to dog parks, stores, or anywhere else that other dogs may have been. Vaccinations should be completed at the appropriate times recommended by your vet before you take your pet anywhere.',
    user_id: 2
  },
  {
    title: 'Teaching from home buddy.',
    post_content: 'This was my first thought and its probably the vet tech in me. This is the time of year that clinics see an increase of parvo cases. I am not sure if it is because it is nicer and people start going out more or what. Parvo can live on surfaces and in the ground for 6 months to a year, so avoid taking your pets to dog parks, stores, or anywhere else that other dogs may have been. Vaccinations should be completed at the appropriate times recommended by your vet before you take your pet anywhere.',
    user_id: 3
  },
  {
    title: 'My very good boy Reddick! He just turned 1 year last week.',
    post_content: 'https://i.imgur.com/pTK1o31.jpg',
    user_id: 4
  },
  {
    title: 'A Distinguished Gentleman',
    post_content: 'This was my first thought and its probably the vet tech in me. This is the time of year that clinics see an increase of parvo cases. I am not sure if it is because it is nicer and people start going out more or what. Parvo can live on surfaces and in the ground for 6 months to a year, so avoid taking your pets to dog parks, stores, or anywhere else that other dogs may have been. Vaccinations should be completed at the appropriate times recommended by your vet before you take your pet anywhere.',
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;
