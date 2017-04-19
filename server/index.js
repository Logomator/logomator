var express = require('express');
var app = express();
var config = require('./config.json');
var NOUN_PROJECT_API_KEY = config.NOUN_PROJECT_API_KEY;
var NOUN_PROJECT_API_SECRET = config.NOUN_PROJECT_API_SECRET;
var cors = require('cors');
var NounProject = require('the-noun-project'),
    nounProject = new NounProject({
        key: NOUN_PROJECT_API_KEY,
        secret: NOUN_PROJECT_API_SECRET
    });

app.use(cors());

app.get('/api/icons/:term', function (req, res) {

    if (!req.params.term) {
        return res.send({error: "You need to specify a term"});
    }

    nounProject.getIconsByTerm(req.params.term, {limit: 9}, function (err, data) {
            
        if (!err) {
            return res.send(data.icons);
        }
        return res.send({message: "API not available"});

    });
});

app.listen(8000,  function () {
    console.log('Logomator API listening on port 8000!')
});