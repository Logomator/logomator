var express = require('express');
var app = express();
var config = require('./config.json');
var NOUN_PROJECT_API_KEY = config.NOUN_PROJECT_API_KEY;
var NOUN_PROJECT_API_SECRET = config.NOUN_PROJECT_API_SECRET;
var cors = require('cors');

app.use(cors());
// TODO Noun project setup
//const NOUN_PROJECT_API_KEY = "8a955263224e474dbc3f46d85a6fdf1c";
//const NOUN_PROJECT_API_SECRET = "6886648ced6547348906dc13e0b23396";
var NounProject = require('the-noun-project'),
    nounProject = new NounProject({
        key: NOUN_PROJECT_API_KEY,
        secret: NOUN_PROJECT_API_SECRET
    });

app.get('/api/icons/:term', function (req, res) {

    if (!req.params.term) {
        return res.send({error: "You need to specify a term"});
    }

    nounProject.getIconsByTerm(req.params.term, {limit: 9}, function (err, data) {
        if (!err) {
            return res.send(data.icons);
        }
        return res.send({error: "API not available"});

    });
});

app.listen(8000,  function () {
    console.log('Example app listening on port 8000!')
});