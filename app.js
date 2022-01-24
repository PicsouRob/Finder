const express = require("express");
const mongoose = require("mongoose");
const Grid = require('gridfs-stream');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const flash    = require('connect-flash');

const keys = require('./config/keys');
require('./models/userModel');
require('./services/passport-setup');

// initialize the app.........
const app = express();

// mongoose connection....
const conn = mongoose.createConnection(keys.MONGOdb_ACCESS, 
    { useNewUrlParser: true, useUnifiedTopology: true 
});
  
// Middleware.........
app.use(cors());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.SESSION_SECRET]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());
app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
});

Grid.mongo = mongoose.mongo;
let gfs;
conn.once('open', () => {
    console.log("connected to mongoDb");
    gfs = Grid(conn.db);
    gfs.collection("photos");
});

// Routes...
require('./routes/auth')(app);
require('./routes/stuff')(app);

app.get('/userProfil/:filename', async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        console.log("Not found");
        console.log(error);
    }
});

const Job = require('./models/createModel');

if(process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // Like our main.js file, or main.css file!

    app.use(express.static('client/build'));

    // Express will serve the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get('/job', async (req, res) => {
    Job.find().then((result) => {
        res.send(result);
    })
});

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => console.log("Server runing up"));