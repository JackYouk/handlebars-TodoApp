const router = require('express').Router();
const {User} = require('../models');

// /api prepended

router.post('/signup', async (req, res) => {
    try {
        // { username: '', password: ''}
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});



module.exports = router;