const express = require("express");
const router = express.Router();

const authVerification = require('../routes/verifyToken');
const { postJobs, getOneThings, getThings, updateThings, 
    deleteThings, getThingsByName, getThingsByUserName, findByZone
} = require('../controllers/createController');
const upload = require('../middleware/upload');

router.post('/add-job', upload.array('images'), (req, res) => postJobs(req, res));

router.get('/', (req, res) => getThings(req, res));

router.get('/:id', (req, res) => getOneThings(req, res));

router.get('/search/:name', (req, res) => getThingsByName(req, res));

router.get('/search/:name/:location', (req, res) => findByZone(req, res));

router.get('/user/:name', (req, res) => getThingsByUserName(req, res));

router.put('/:id', upload.array('images'), (req, res) =>  updateThings(req, res));

router.delete('/:id', (req, res) => deleteThings(req, res));

module.exports = router;