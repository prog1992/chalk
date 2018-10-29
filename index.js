const chalk = require('chalk');


// I wrote a function to save time
displayText('yellow', 'There once was a man name Frank.');
displayText('red', 'Frank was a strange guy.');
displayText('magenta', 'Frank didn\'t have many friends.');
displayText('cyan', 'Probably because Frank named the hot dogs after himself...');
displayText('yellow', '...');
displayText('green', 'What a waste frank!');
displayText('red', 'You could of called those dogs of hot.');
displayText('magenta', 'But instead you had to make sense and name it something more adultish.');
displayText('bgcyan', 'Thanks, Frank.');
displayText('yellow', '...');
displayText('red', 'You\'re the reason we don\'t have cool named dogs of hot.');
displayText('yellow', '....');
displayText('magenta','Frank...');

function displayText(color, text) {
	if (color == 'blue') {
		console.log(chalk.blue(text));
	} else if (color == 'red') {
		console.log(chalk.red(text));
	} else if (color == 'magenta') {
		console.log(chalk.magenta(text));
	} else if (color == 'cyan') {
	        console.log(chalk.cyan(text));
	} else if (color == 'bgcyan') {
		console.log(chalk.underline.bgCyan(text));
	} else if (color == 'green') {
		console.log(chalk.green(text));	
	} else if (color == 'yellow') {
		console.log(chalk.yellow(text));
	}
}
