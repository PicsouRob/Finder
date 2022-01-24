const express = require("express");

const { searchThings, getAllStuff, getOneStuff, getOneUserStuff } = require('../controllers/stuffController')
const upload = require('../middleware/upload');
const requestLogin = require('../middlewares/requestLogin');

module.exports = (app) => {
    app.get('/api/stuff', getAllStuff);
    app.get('/api/search-stuff/:value/:location', searchThings);
    app.get('/api/stuff/:id', getOneStuff);
    app.get('/api/user/stuff/:creatorId', getOneUserStuff);
};

// router.post('/add-job', upload.array('images'), (req, res) => postJobs(req, res));

// router.get('/user/:creatorId', (req, res) => getThingsByUserName(req, res));

// router.put('/:id', upload.array('images'), (req, res) =>  updateThings(req, res));

// router.delete('/:id', (req, res) => deleteThings(req, res));

// module.exports = router;