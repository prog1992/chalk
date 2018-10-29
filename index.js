const chalk = require('chalk');

function chalkText(color, text) {
	switch(color){
		case "blue":
			console.log(chalk.blue(text));
			break;
		case "yellow":
			console.log(chalk.yellow(text));
			break;
		case "green":
			console.log(chalk.green(text));
			break;
		default:
			console.log("Problem Identifying Color!");
			break;
	}
}

chalkText('blue','He stopped, blinking in the dimness at disparate shelves that forced him to wend his way to the counter.');
chalkText('blue','He marveled at the well-thumbed volumes with missing dust jackets no doubt relished and lent to friends or pulled from boxes in attics.');
chalkText('blue','He also spotted fresher tomes no doubt abandoned after a few pages.');
chalkText('yellow','“May I help you?” She\'d yanked her hair into a painful-looking bun.');
chalkText('green','“I\'d like Malory\'s King Arthur book.”');
chalkText('yellow','“You don\'t want Le Morte d\'Arthur.”');
chalkText('green','“I don\'t?"');
chalkText('yellow','“You want Geoffrey of Monmouth\'s version.”');
chalkText('green','"Why?"');
chalkText('yellow','"He treats Guinevere better. It\'s complex. Coffee?”');
chalkText('blue','He headed for the door, fast.');