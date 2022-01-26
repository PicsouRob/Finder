const passport = require('passport');

const upload = require('../middleware/upload');
const requestLogin = require('../middlewares/requestLogin');
const { getUserById, updateUser, updateProfilPhoto,
    deleteAccount
} = require('../controllers/userController');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', 
        { scope: ['email', 'profile'] 
    }));

    app.get('/auth/google/callback', passport.authenticate('google', {
            failureRedirect: '/'
        }), (req, res) => {
            res.redirect('/');
        }
    );

    app.post('/auth/register', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/auth/error-message',
        failureFlash: true,
    }), (req, res) => {
        res.redirect('/');
    });

    app.post('/auth/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth/error-message',
        failureFlash: true
    }), (req, res) => {
        res.redirect('/');
    });

    app.get('/auth/error-message', (req, res) => {
        res.send({ error: req.flash('message')[0] });
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', requestLogin, (req, res) => {
        req.logout();

        res.redirect('/');
    });

    app.get('/api/user-data/:id', getUserById);
    app.put('/api/update-data/:id', requestLogin, updateUser);
    app.put('/api/user/update-profil/:id', requestLogin, upload.single('image'), updateProfilPhoto);
    app.delete('/api/user/delete-account/:id', requestLogin, deleteAccount);
};

// router.post("/login", (req, res, next) => loginValidation(req, res, next));

// router.put('/forgot-password', (req, res, next) => forgetPassword(req, res, next));

// router.put('/reset-password', (req, res, next) => resetPassword(req, res, next));
