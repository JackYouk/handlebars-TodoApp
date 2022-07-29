const router = require('express').Router();
const apiController = require('./apiController');
const {User} = require('../models');

// renders signup/landing page
router.get('/', (req,res) => {
    res.render('landingPage');
});

// renders users page using user database data
router.get('/users', async (req, res) => {
    try {
        const dbUsersData = await User.findAll();
        // map db data to plain json
        const users = dbUsersData.map(dbUser => dbUser.get({plain: true}));
        console.log(users);
        res.render('users', {
            users,
            loggedInUser: req.session.user || null,
            isLoggedIn: req.session.isLoggedIn,
        });
    } catch (error) {
        console.log('Err L:25 homepageController', error);
        res.status(500).json({error});
    }
});

// renders user profile page given a user id
router.get('/users/:userId', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.userId);
        const user = userData.get({plain: true});

        res.render('userProfile', {user});
    } catch (error) {
        res.status(500).json({error});
    }
});

router.get('/todos', (req, res) => {
    res.render('todos');
})

// sends routes w/ /api to apiController.js file
router.use('/api', apiController);

module.exports = router;