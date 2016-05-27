/**
 * Created by manu on 5/27/16.
 */
var exec = require('child_process').exec;

//Variables
let params = [];
process.argv.forEach(arg => {
	params.push(arg);
});

if (params.length < 3) {
	console.log('NO PARAMS RECIEVED');
	process.exit();
}

let type = params[2];
let version = params[3];

if (type !== 'finish' && type !== 'start') {
	console.log(type + ' is not a valid type');
	process.exit();
}

exec('git flow release ' + type + ' ' + version + ' ' + (type == 'finish' ? '-m ' + version : ''),
	function(err, ok) {
		if (err !== null) {
			console.log(err);
			return;
		}
		console.log(ok);
		if (type == 'start') {
			exec('npm version ' + version, function(err, ok) {
				if (err !== null)console.log(err);
				console.log(ok);
			});
		}

	});
