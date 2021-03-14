const { Post } = require('../models');

const PostData = [
  {
    title: 'Look who went on their first walk today',
    post_content: 'This was my first thought and its probably the vet tech in me. This is the time of year that clinics see an increase of parvo cases. I am not sure if it is because it is nicer and people start going out more or what. Parvo can live on surfaces and in the ground for 6 months to a year, so avoid taking your pets to dog parks, stores, or anywhere else that other dogs may have been. Vaccinations should be completed at the appropriate times recommended by your vet before you take your pet anywhere.',
    user_id: 1
  },
  {
    title: 'Some technical proposals that were considered for the ethereum protocol but never made it in: a history',
    post_content: 'There have been a lot of protocol changes that have been suggested for Ethereum. Some were implemented quickly, others were implemented after many refinements, and still others were forgotten because of disinterest or because they proved to create more problems than they solve. Some of these ideas may be best left for dead, but others, after improvements, perhaps could make it in after all (though after high-priority stuff like merge, statelessness and EIP 1559). Here is a few examples of ideas that were once considered and are now ignored.',
    user_id: 2
  },
  {
    title: 'Asynchronous calling',
    post_content: 'In the earlier stages of Ethereum development (pre-launch), there was an opcode that was proposed called POST. A POST is equivalent to a CALL, except instead of the call happening immediately, the call happens at the end of thee transaction. It was abandoned because of pressure to launch on time and because there was not enough obvious value for it. Later on in 2016-18, there were serious discussions about revamping the VM in the context of sharding, and one of the ideas on the table was to make all calls asynchronous. This too was abandoned, as the sharding design moved to a maximally-simple MVP: just make many copies of the existing EVM and give them a simple (by necessity asynchronous) channel to talk to each other, but allow synchronous execution within shards. Demand for "defi composability" further closed the door on this, and Ethereum moving to an all-asynchronous model now seems very unlikely.',
    user_id: 3
  },
  {
    title: 'Transparent sharding with automated load balancing',
    post_content: 'Transparent sharding is a form of sharding where contracts would not even be able to tell which shard they are on, and contracts could be moved between shards by the protocol. The protocol would automatically move contracts between shards to ensure that the load on each shard remains about the same. This was also abandoned in response to remands for sharding to be simplified so that it could ship faster; additionally, it was never clear why this kind of sharding is better than "economic load balancing", where contracts themselves could hop between shards if they choose to, and users would naturally migrate to shards with lower gas costs and thereby help balance out the load.',
    user_id: 4
  },
  {
    title: 'Delayed calls',
    post_content: 'In early 2015, an opcode called ALARM was also proposed. This opcode would also do a call, except the call would execute in some future block. This has many use cases; for example, withdrawals from rollups could finalize automatically, users who put their funds into bids at auctions could get their funds back when the time expires, etc. There are also applications for censorship resistance: a user could publish a transaction with an ALARM call, where the effect of the transaction depended on some other behavior that the user knew would happen between transaction sending time and alarm execution time, and block producers would not be able to censor it, MEV bots would not be able to manipulate it, etc.',
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;
