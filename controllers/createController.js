const Job = require('../models/createModel');
const User = require('../models/userModel');
const { validatedCreate } = require('../validations/createValidation');

const postJobs = async (req, res) => {
    let imagesArray = [];

    const images = req.files ? [] : req.files.forEach((ele) => {
        imagesArray.push(ele.filename);
        return imagesArray; 
    });

    console.log(images);

    // const { error } = await validatedCreate.validate(req.body);
    // if(error) return res.json({ error: error.details[0].message });
    // const { nameCreator, email, phone, job, description, location, facebookProfil, instagramProfil } = req.body;

    // const existedJob = await  Job.findOne({ nameCreator, job });
    // if(existedJob) return res.json({ error: "Vous avez déjà ajouté ce métier" });

    // const jobs = new Job({
    //     nameCreator, email, phone, job, description, 
    //     location, facebookProfil, instagramProfil
    // });
    
    // try {
    //     await jobs.save();
    //     res.json(jobs);
    // } catch(err) {
    //     res.json({ error: err });
    // }
};

const getThings = async (req, res) => {
    Job.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.json({ error }));
}

const getOneThings = async (req, res) => {
    Job.findOne({ _id: req.params.id })
    .then(job => {
        if(!job) return res.json({ error: `Oups! désolé, aucun résultat trouvé pour ${job.job}` });
        res.status(200).json(job)
    })
    .catch(error => res.json({ error }));
}

const getThingsByName = async (req, res) => {
    const job = `${req.params.name}`;
    Job.findOne({ job }).then(response => {
        if(!response) return res.json({ error: `Oups ! désolé, aucun résultat trouvé pour ${job}, Il semble que nous ne puissions trouver aucun résultat basé sur votre recherche. ` });
        res.status(200).json(response)
    }).catch(error => res.json({ error }));
}

const getThingsByUserName = async (req, res) => {
    Job.findOne({ nameCreator: req.params.name }).then(response => {
        if(!response) return res.json({ error: "Oups ! désolé, aucun résultat trouvé" });
        res.status(200).json(response)
    }).catch(error => res.json({ error }));
}

const findByZone = async (req, res) => {
    const { name, location } = req.params;
    Job.findOne({ job: name, location }).then(response => {
        if(!response) return res.json({ error: "Oups ! désolé, aucun résultat trouvé" });
        res.status(200).json(response)
    }).catch(error => res.json({ error }));
}

const updateThings = async (req, res) => {
    Job.findOne({ _id: req.params.id })
    .then(job => {
        job.updateOne({ ...req.body }, (err, success) => {
            if(err) return res.json({ error: "Quelque chose s'est mal passé" });

            res.status(200).json({ message: "Objet modified !" });
        })
    }).catch(error => res.json({ error: "Une erreur s'est produite" }));
}

const deleteThings = async (req, res) => {
    Job.findOne({ _id: req.params.id })
    .then(thing => {
        if(!thing) return res.json({ error: "Erreur lors de la suppression de cette tâche" });
        thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}

module.exports.postJobs = postJobs;
module.exports.getThings = getThings;
module.exports.getOneThings = getOneThings;
module.exports.getThingsByName = getThingsByName;
module.exports.getThingsByUserName = getThingsByUserName;
module.exports.updateThings = updateThings;
module.exports.findByZone = findByZone;
module.exports.deleteThings = deleteThings;