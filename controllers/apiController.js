const router = require('express').Router();
const {User} = require('../models');

// /api prepended

// post signup data to database
router.post('/signup', async (req, res) => {
    try {
        // adds signup data to database
        // post data: { username: '', password: ''}
        const newUser = await User.create(req.body);

        // saves user session with new user data
        req.session.save(() => {
            req.session.user = newUser;
            req.session.isLoggedIn = true;
            res.json(newUser);
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});



module.exports = router;