const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const config = require('../config');

const storage = new GridFsStorage({
    url: 'mongodb+srv://picsou:picsou13@cluster0.4td5k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    options: { 
        useNewUrlParser: true, useUnifiedTopology: true
    },
    file: (req, file) => {
        const mimetype = ["image/png", "image/jpeg"];

        if(mimetype.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;

            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    }
});

module.exports = multer({ storage });