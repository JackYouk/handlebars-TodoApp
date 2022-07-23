const router = require('express').Router();
const {User} = require('../models');

const todos = [
    'clean tha apt',
    'eat lunch',
];

router.get('/', (req,res) => {
    res.render('todos', {
        todos,
        favFood: 'hamburgesa',
    });
});

// HTML routes and API routes
router.get('/users', async (req, res) => {
    try {
        const dbUsersData = await User.findAll();
        const users = dbUsersData.map(dbUser => dbUser.get({plain: true}));
        console.log(users);
        res.render('users', { users });
    } catch (error) {
        console.log('Err L:25 homepageController', error);
        res.status(500).json({error});
    }
});

module.exports = router;