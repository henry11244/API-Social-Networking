const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing courses
    await User.deleteMany({});

    // Drop existing students
    await Thought.deleteMany({});

    // Create empty array to hold the students
    const users = [];



    // Loop 20 times -- add students to the students array
    for (let i = 0; i < 5; i++) {
        var username = getRandomName();
        var email = `${username}@gmail.com`;

        users.push({
            username,
            email,

        });
    }

    const reaction = getRandomReaction(2, users);

    // Add students to the collection and await the results
    await User.collection.insertMany(users);


    // Add courses to the collection and await the results
    await Thought.collection.insertMany([

        {
            thoughtText: 'Random thought test 1',
            username: users[0].username,
            reactions: reaction
        },
        {
            thoughtText: 'Random thought test 2',
            username: users[1].username,
            reactions: reaction
        },
        {
            thoughtText: 'Random thought test 3',
            username: users[2].username,
            reactions: reaction
        },
        {
            thoughtText: 'Random thought test 4',
            username: users[3].username,
            reactions: reaction
        },

    ]);

    // Log out the seed data to indicate what should appear in the database
    console.table(users);

    console.info('Seeding complete! 🌱');
    process.exit(0);
});
