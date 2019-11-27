var svg2png = require('svg2png');
var ncp = require('ncp');
var path = require('path');

svg2png(path.resolve('./images/toggle.svg'), path.resolve('./images/toggle.png'), 1.0, function (err) {
	ncp('./images/toggle.png', 'dist/images/toggle.png');
});
