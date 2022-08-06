var routes = require('express').Router();
var Recorde = require('../models/md_recorde');

//POST adicionar um novo recorde
routes.post('/', function(req, res){
    if(!req.body.username || !req.body.recorde){
        return res.status(422).send({error: "No data parameters"});
    }
    var novoRecorde = new Recorde({
        username: req.body.username,
        recorde: parseFloat(req.body.recorde)
    });
    novoRecorde.save(function(err){
        if(err) return res.status(403).send({error: err});
        return res.send({recorde: novoRecorde});
    });
});

// GET busca um recorde pelo id
routes.get('/id/:identificacao', function(req, res){
    if(!req.params.identificacao){
        return res.status(422).send({error: "Missing id"});
    }
    Recorde.findById(req.params.identificacao).select('_id username recorde').exec(function(err,recorde){
        if(err) return res.status(403).send({error: err});
        if(!recorde) return res.status(403).send({error: "Recorde dont exist id" });
        return res.send({recorde});
    });
})

module.exports = routes;