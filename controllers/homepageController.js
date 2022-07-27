const router = require('express').Router();
const apiController = require('./apiController');
const {User} = require('../models');


router.get('/', (req,res) => {
    res.render('landingPage');
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

router.get('/users/:userId', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.userId);
        const user = userData.get({plain: true});

        res.render('userProfile', {user});
    } catch (error) {
        res.status(500).json({error});
    }
});


router.use('/api', apiController);

module.exports = router;