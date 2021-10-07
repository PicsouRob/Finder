const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const User = require('./models/userModel');
const authVerification = require('./routes/verifyToken');
const authRoute = require('./routes/auth');
const createRoute = require('./routes/create');
const config = require('./config');
// initialize the app.........
const app = express();

// mongoose connection....
mongoose.connect(config.MONGOdb_ACCESS, { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log("connected to mongoDb"))
    .catch(() => console.log("connection failed")
);

var store = new MongoDBStore({
    uri: `${config.MONGOdb_ACCESS}`,
    collection: 'userSessions',
    connectionOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000
    }
});

// Middleware
// app.use(cors({
//     origin: [],
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use(cors());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: config.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    store: store,
    cookie: {
        httpOnly: true,
        maxAge: parseInt(1000 * 60 * 60 * 24 * 30),
    },
}));

app.use((req, res, next) => {
    console.log(req.session);
    next();
});

app.get('/', async (req, res) => {
    // let hea = new Headers()
    // const token = req.header('auth-token');
    // res.setHeader('auth-token', token);
    // res.send(token);
    const { user, token } = req.session;
    if(user) {
        await User.findOne({ name: user.name }).then(user => {
            res.json({ user, isLogged: true, token, session: req.session });
        }).catch(err => res.json({ error: err }));
    } else {
        return res.json({ isLogged: false, session: req.session, token });
    }
});

app.post('/api/user/logout', authVerification, (req, res, next) => {
    req.session.destroy(err => {
        if(err) return res.status(400).json({ error: "Erreur de déconnexion" });

        store.destroy();
        res.status(200).json({ message: "Vous êtes déconnecté" });
        next();
    });
});

app.use('/api/job', createRoute);
app.use("/api/user", authRoute);

app.listen(config.PORT || 8000, () => console.log("Server runing up"));