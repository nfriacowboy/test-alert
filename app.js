const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;;

let appInsights = require('applicationinsights');

appInsights.setup("e506aa3a-10af-4f22-a594-656fda5a89ce")
.setSendLiveMetrics(true)
.start();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));