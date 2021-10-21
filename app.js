const express = require("express");
const mongoose = require("mongoose");
const Grid = require('gridfs-stream');
const cors = require('cors');

const Job = require('./models/createModel');
const authRoute = require('./routes/auth');
const createRoute = require('./routes/create');
const config = require('./config');
// initialize the app.........
const app = express();

// mongoose connection....
const conn = mongoose.createConnection(config.MONGOdb_ACCESS, { useNewUrlParser: true,
    useUnifiedTopology: true });
    //     .then((conn) => {
        //         console.log("connected to mongoDb");
        //     }).catch(() => console.log("connection failed")
        // );
        
        // const conn = mongoose.createConnection(config);
Grid.mongo = mongoose.mongo;
let gfs;
conn.once('open', () => {
    console.log("connected to mongoDb");
    gfs = Grid(conn.db);
    gfs.collection("photos");
});

// Middleware.........
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/userProfil/:filename', async (req, res) => {
    try {
        await gfs.files.findOne({ filename: req.params.filename }, (result) => {
            res.send(result);
            // const readStream = gfs.createReadStream(result.filename);
            // readStream.pipe(res);
            // console.log(result);
        });
    } catch (error) {
        console.log("Not found");
        console.log(error);
    }
});

app.get('/', async (req, res) => {
    await Job.find().then(user => {
        res.json(user);
    }).catch(err => res.json({ error: err }));
});

app.use('/api/job', createRoute);
app.use("/api/user", authRoute);

app.listen(config.PORT || 8000, () => console.log("Server runing up"));