var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var port = (process.env.PORT || 5001);

var app = express();

require('/apiRoutes.js')(app);
require('/htmlRoutes.js')(app);