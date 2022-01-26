const mongoose = require("mongoose");
const User = mongoose.model('User');

module.exports = {
    getUserById: async (req, res) => {
        User.findById(req.params.id)
        .then((response) => {
            if(!response) return res.send({ 
                    error: "Oups ! désolé, aucun résultat trouvé"
                });

            return res.status(200).send(response);
        })
    },
    updateUser: async (req, res) => {
        User.updateOne({ _id: req.params.id 
        }, req.body).exec().then(() => res.send({ 
            success: "Votre profile a été modifié avec succès"
        })).catch(error => res.json({ error }));
    },
    updateProfilPhoto: (req, res) => {
        const image = `https://finderht.herokuapp.com/userProfil/${req.file.filename}`;
        User.updateOne({ _id: req.params.id 
        }, { image }).exec().then(() => res.send({ 
            success: "Votre photo de profile a été modifié avec succès"
        })).catch(error => res.json({ error }));
    },
    deleteAccount: async (req, res) => {
        User.findById(req.params.id).then((res) => {
            if(!res) return res.send({ error: "Cette utilisateur n'existe pas"});

            // User.deleteOne({ _id: req.params.id }).exec().then(() => {
                res.send({ message: "utilisateur Supprimer" });
            // }).catch(error => res.json({ error }));
        }).catch(error => res.json({ error }));
    }
}