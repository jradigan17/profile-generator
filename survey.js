const readline = require('readline');

// -------------------------------------------
//Global Variable Color List
const conColorCyan = "\x1b[36m", conColorRed = '\x1b[31m', conColorGreen = '\x1b[92m', conColorGrey = '\x1b[90m', conColorReset = "\x1b[0m", conColorMagenta = `\x1b[95m`, conColorOrange = "\u001b[38;5;208m", conColorYellow = '\x1b[93m';
const conColorBright = "\x1b[1m", conColorDim = "\x1b[2m", conColorItalics = "\x1b[3m", conColorReverse = "\x1b[7m";
const consoleLine = '-'.repeat(process.stdout.columns);
const consoleHalfLine = '-'.repeat((process.stdout.columns) / 2);
// -------------------------------------------

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`${conColorCyan}What's your name? (Nicknames are also acceptable) ${conColorGreen}`, (answerQ1) => {
  rl.question(`${conColorCyan}What's an activity you like doing? ${conColorGreen}`, (answerQ2) => {
    rl.question(`${conColorCyan}What do you have in your mouth while doing that? ${conColorGreen}`, (answerQ3) => {
      rl.question(`${conColorCyan}Which meal is your favourite (eg: dinner, brunch, etc.)? ${conColorGreen}`, (answerQ4) => {
        rl.question(`${conColorCyan}Who's your person to have that meal with? ${conColorGreen}`, (answerQ5) => {
          console.log(`${conColorOrange}${consoleLine}${conColorReset}`);
          console.log(`${conColorCyan}Your Profile${conColorReset}`);
          console.log(`${conColorRed}${answerQ1} loves ${answerQ2} with a ${answerQ3} in his mouth.${conColorReset}`);
          console.log(`${conColorRed}${answerQ1}'s favourite meal is ${answerQ4} with ${answerQ5}.`);
          console.log(`${conColorOrange}${consoleLine}${conColorReset}\n`);
          rl.close();
        });
      });
    });
  });
});