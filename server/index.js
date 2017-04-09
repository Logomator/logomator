let express = require('express');
let app = express();
const config = require('./config.js');
const mockLogoAssets = require('./mock/logoAssets_mock.json');

const NOUN_PROJECT_API_KEY = config.NOUN_PROJECT_API_KEY;
const NOUN_PROJECT_API_SECRET = config.NOUN_PROJECT_API_SECRET;

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

app.get('/api/', (req, res) => {
    return res.send{ mockLogoAssets }
});

app.listen(8000,  () => {
    console.log('Example app listening on port 3000!')
});