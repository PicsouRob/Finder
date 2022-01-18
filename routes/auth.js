const passport = require('passport');

const upload = require('../middleware/upload');
const requestLogin = require('../middlewares/requestLogin');

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
        // failureRedirect: '/auth/signup',
        // failureFlash: true,
    }), (req, res) => {
        res.redirect('/');
    });

    app.post('/auth/login', function (req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.redirect('/');
            });
        })(req, res, next);
    });

    app.get('/api/current_user', requestLogin, (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', requestLogin, (req, res) => {
        req.logout();

        res.redirect('/');
    });
};

// router.post("/register", upload.single('image'), (req, res, next) => registerValidation(req, res, next));

// router.get('/:id', (req, res) => getProfil(req, res));

// router.put('/update-user/:id', upload.single('image'), (req, res) => updateUser(req, res));

// router.post("/login", (req, res, next) => loginValidation(req, res, next));

// router.put('/forgot-password', (req, res, next) => forgetPassword(req, res, next));

// router.put('/reset-password', (req, res, next) => resetPassword(req, res, next));

// router.delete('/delete-account/:id', (req, res) => deleteAccount(req, res));