const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {

    async index(req, res){
        const {user} = req.headers;
        const loggedUser = await Dev.findById(user);
        
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes }},
                { _id: { $nin: loggedDev.deslikes }}              
            ]
        });
        
        return res.json(users);

    },

    async store(req, res){

        // pegando os dados pela API
        const {username} = req.body;
        let retorno = await axios.get(`https://api.github.com/users/${username}`);
        
        // verifica se não existe
        const userExists = await Dev.findOne({user: username});

        if(userExists)
        {
            return res.json(userExists);
        }

        // salvando
        const {name, bio, avatar_url: avatar } = retorno.data;
        const dev = await Dev.create({ user : username, name, bio, avatar });

        return res.json(dev);
    }
}