const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const config = require('../config');

const googleLogin = async (req, res, next) => {
    const client = new OAuth2Client(config.CLIENT_ID);
    const { tokenId } = req.body;
    const userInfo = await client.verifyIdToken({ idToken: tokenId, audience: config.CLIENT_ID });
    const { name, email_verified, picture, email } = userInfo.payload;
    if(email_verified) {
        const token = jwt.sign({ email, name }, config.TOKEN_SECRET);
        const user = await User.findOne({ email });
        if(user) {
            req.session.token = token;
            req.session.name = name;
            req.session.isLogged = true;
            return res.json({ user });
        }
        const newUser = new User({
            name, email,
            password: email+config.TOKEN_SECRET,
            image: picture,
        });

        res.header('auth-token', token);

        newUser.save(result => {
            req.session.token = token;
            req.session.name = name;
            req.session.isLogged = true;
        });
        res.json({ newUser });
    } else {
        return res.json({ error: "Quelque chose s'est mal passé" });
    }
}

module.exports.googleLogin = googleLogin;