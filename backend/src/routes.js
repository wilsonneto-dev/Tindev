const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DeslikeController = require('./controllers/DeslikeController');

const routes = express.Router();

routes.get(
    "/",
    (req, res) => {

        // pegando query string
        if(req.query.name)
            return res.json({ message: `Hello World: ${req.query.name}` });
        else
            return res.send('sem parametro 2');
    }
);

routes.post('/devs', ( req, res ) => {
    DevController.store(req, res);
})

routes.post(
    '/devs/:devId/likes',
    // pode-se passar assim
    LikeController.store
);

routes.post('/devs/:devId/deslikes', DeslikeController.store );
routes.post('/devs', DevController.index );

module.exports = routes;