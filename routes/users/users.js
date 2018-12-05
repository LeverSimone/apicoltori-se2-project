const db = require('../../db/db.js');

const logic = require('./users_logic/users_logic.js');



module.exports = {



    users_get: (req, res) => {

        res.status(501).send('Coming soon!');

    },



    users_post: (req, res) => {

        var user = req.body;

        try {

            user = logic.add_user(user);

            res.status(201).json(user);

        } catch (e) {

            res.status(500).send(e);

        }

    },



    users_id_get: (req, res) => {

        try {

            var id = req.params.id;
            var user = logic.get_user_by_id(id);

            res.status(200).json(user);

        } catch (e) {

            res.status(404).send(e);

        }

    }, 


}