var chai = require('chai');
var server = require('../index');
var chaiHttp = require('chai-http');
var Recorde = require('../models/md_recorde');
var should = chai.should();

chai.use(chaiHttp);

describe('Recorde', function(){

    var id;
    var token;

    before(function(next){
        Recorde.remove({}, function(err){
            next()
        });
    });

    // Realizar um post para criar um novo registro
    it('Novo username', function(done){
        var novoRecorde = {
            username: "daniel",
            recorde: 1000
        };

        chai.request(server)
        .post('/recorde')
        .send(novoRecorde)
        .end(function(err, res){

            res.should.have.status(200);
            res.body.should.have.property('recorde');

            res.body.recorde.should.have.property('_id');
            res.body.recorde.should.have.property('token');
            res.body.recorde.should.have.property('username');
            res.body.recorde.should.have.property('recorde');
            res.body.recorde.username.should.be.equal('daniel');
            res.body.recorde.recorde.should.be.equal(1000);
            
            token = res.body.recorde.token;
            id = res.body.recorde._id;

            done();
        });
    });

    // Realiza uma busca do registro pelo id 
   
    // Realiza a busca do resgistro pelo token

    // Altera o recorde do registro para um valor menor

    // Altera o recorde do registro para um valor maior
    
    

})