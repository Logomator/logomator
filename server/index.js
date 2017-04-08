var express = require('express');
var app = express();
const config = require('./config.js');

// TODO Noun project setup
//const NOUN_PROJECT_API_KEY = "8a955263224e474dbc3f46d85a6fdf1c";
//const NOUN_PROJECT_API_SECRET = "6886648ced6547348906dc13e0b23396";
// var NounProject = require('the-noun-project'),
//     nounProject = new NounProject({
//         key: NOUN_PROJECT_API_KEY,
//         secret: NOUN_PROJECT_API_SECRET
//     });
//
// nounProject.getIconsByTerm('goat', {limit: 2}, function (err, data) {
//     if (!err) {
//         console.log(data.icons);
//         res.send(data.icons);
//     }
// });

app.get('/', function (req, res) {
    return res.render('index.html');
});

app.listen(8000, function () {
    console.log('Example app listening on port 3000!')
});