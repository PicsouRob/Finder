const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const config = require('../config');
const User = require('../models/userModel');
const { validatedLogin, validatedRegister }  = require("../validations/userValidation");

const registerValidation = async (req, res, next) => {
    // Check Validation
    const { error } = await validatedRegister.validate(req.body);
    if(error) return res.json({ error: error.details[0].message });
    const { name, email, password } = req.body;

    // Check existing user
    const existEmail = await User.findOne({ email });
    if(existEmail) return res.json({ error: "Email already exist" });
    
    // Hash password......
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // New User
    const user = new User({ name, email, password: hashedPassword,
        image: req.image === undefined ? "" : `${process.env.PORT}/userProfil/${req.image.filename}`
    });

    const token = jwt.sign({ email, name }, config.TOKEN_SECRET);
    res.header('auth-token', token);
    // Generate the session.........
    
    try {
        await user.save();
        res.json({ message: "Votre compte à été créé avec succès", user, token });
        next();
    } catch (err) {
        return res.json({ error: "Quelque chose s'est mal passé" });
    }
};

const getProfil = async (req, res) => {
    await User.findOne({ _id: req.params.id }).then(user => {
        if(!user) return res.json({ error: "Oups, cette utilisateur n'existe pas" });
        res.status(200).json( user );
    }).catch(error => { return res.json({ error })})
}

const loginValidation = async (req, res, next) => {
    // Check Validation
    const { error } = await validatedLogin.validate(req.body);
    if(error) return res.json({ error: error.details[0].message });

    // Check existing user 
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.json({ error: "Cette e-mail n'existe pas, créer un compte" });
    // Compare the password
    const validatedPass = await bcrypt.compare(req.body.password, user.password);
    if(!validatedPass) return res.json({ error: "Mot de passe incorrect" });
    // Generate the Token ......
    const token = jwt.sign({  name: user.name, email: user.email }, config.TOKEN_SECRET);
    res.header('auth-token', token);

    res.status(200).json({ user, token, message: "Connecter avec succès" });
    next();
}

const deleteAccount = async (req, res, next) => {
    User.findByIdAndDelete({ _id: req.params.id }).then(user => {
        res.status(200).json({ message: "Votre compte a été supprimé avec succès" });
        next();
    }).catch(error => { return res.json({ error })})
}

module.exports.registerValidation = registerValidation;
module.exports.getProfil = getProfil;
module.exports.loginValidation = loginValidation;
module.exports.deleteAccount = deleteAccount;