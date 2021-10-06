const express = require("express");
const router = express.Router();
const { registerValidation, loginValidation, getProfil, deleteAccount }  = require("../controllers/user")
const { googleLogin } = require('../controllers/googleLogin');
const { resetPassword, forgetPassword } = require('../controllers/updateUser');
const authVerification = require('../routes/verifyToken');

router.post("/register", (req, res, next) => registerValidation(req, res, next));

router.get('/:name', (req, res) => getProfil(req, res));

router.post("/login", (req, res, next) => loginValidation(req, res, next));

router.put('/forgot-password', authVerification, (req, res, next) => forgetPassword(req, res, next));

router.put('/reset-password', authVerification, (req, res, next) => resetPassword(req, res, next));

router.post("/google-login", (req, res, next) => googleLogin(req, res, next));

router.delete('/delete-account/:id', authVerification, (req, res) => deleteAccount(req, res));

module.exports = router;