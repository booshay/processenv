//Install express server
const express = require('express');
const path = require('path');

const app = express();
//import * as process from 'process';

// Serve only the static files form the dist directory
app.use(express.static('./dist/processenv'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/processenv/index.html'));
});

 console.log (process.env);
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
