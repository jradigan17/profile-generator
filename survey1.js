// From EJ
// LHL - survey.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/392?journey_step=32&workbook=7
// 2022-07-23 
//



// GLOBAL console.log color and style variables
// 
const conColorCyan = "\x1b[36m", conColorRed = '\x1b[91m', conColorGreen = '\x1b[92m', 
      conColorGrey = '\x1b[90m', conColorReset = "\x1b[0m";
const conColorBright = "\x1b[1m", conColorDim = "\x1b[2m", conColorItalics = "\x1b[3m", conColorReverse = "\x1b[7m";
const consoleLine = '-'.repeat(process.stdout.columns);
const consoleHalfLine = '-'.repeat((process.stdout.columns)/2);

// header & borderColor is color in our library
function drawHeaderBox(headerText,headerColor,borderColor) {
  return (`${borderColor}${'-'.repeat(headerText.length+4)}${conColorReset}${borderColor}\n| ${headerColor}${headerText} ${borderColor}|${conColorReset}\n${borderColor}${'-'.repeat(headerText.length+4)}${conColorReset}`);
}

// lineColor is variable in our library // lineLength as % of console width // borderColor as variable in library
function drawDivideLine(lineColor,lineLength,lineMessage) { 
  if(lineMessage) {
    lineMessage = '--[ ' + lineMessage + ' ]';
  } else { lineMessage = '';}
  const consoleLine = '-'.repeat((process.stdout.columns)*((lineLength/100))-((lineMessage.length)));
  return (`${lineColor}${lineMessage}${consoleLine}${conColorReset}`);
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
console.log(drawDivideLine(conColorGreen,50,"LHL - Survey App"));
console.log(`\nItems marked with ${conColorRed}*${conColorReset} are required!\n`);


const surveyQuestions = [
`${conColorRed}*${conColorReset} ${conColorGreen}What's your name? ${conColorReset}${conColorDim}Nicknames are also acceptable.${conColorReset}`,
`What's an activity you like doing?`,
`What do you listen to while doing that?`,
`Which meal is your favourite ${conColorDim}(eg: dinner, brunch, etc.)${conColorReset}`,
`What's your favourite thing to eat for that meal?`,
`Which sport is your absolute favourite?`,
`What is your superpower? ${conColorDim}In a few words, tell us what you are amazing at!${conColorReset}`
];

let surveyAnswers = [];
// console.log('\n\nCHAR AT: '+surveyQuestions[0].charAt(5)+'\n\n'); // DEBUG to find start of line if we're using color codes


//
// PROBLEM:  we need to use call back to run into the next surveyQuestions
// https://github.com/nodejs/node/blob/main/doc/api/readline.md

function askQuestions(questionIndex) {
  if (questionIndex < surveyQuestions.length) { // loop thru all questions - readline needs to use callbacks
    rl.question(conColorGreen + surveyQuestions[questionIndex] + conColorCyan +' ', (answer) => {
      if(!answer && surveyQuestions[questionIndex].charAt(5) ==='*') {
        console.log(`\n${conColorRed}Input Required for this question.  ${conColorGreen}Try again!${conColorReset}\n`);
        askQuestions(questionIndex);
      } else {
        surveyAnswers.push(answer);
        askQuestions(questionIndex + 1);
      }
    });
  } else {
    rl.close();
    console.log(`\nThanks for filling out your profile, ${conColorBright}${surveyAnswers[0]}${conColorReset}.\n`);
    console.log(`📗 YOUR PROFILE:`);
    console.log(conColorGreen + consoleHalfLine + conColorReset);
    if(surveyAnswers[2] && surveyAnswers[1]) {
      console.log(`${conColorGreen}Your favorite thing to listen to while ${conColorCyan}${surveyAnswers[1]}${conColorGreen} is ${conColorCyan}${surveyAnswers[2]}${conColorGreen}.${conColorReset}`);
    }
    if(surveyAnswers[4] && surveyAnswers[3]) {
      console.log(`${conColorGreen}Your favorite thing to eat is ${surveyAnswers[4]} while at ${surveyAnswers[3]}.${conColorReset}`);
    }
    if(surveyAnswers[5] && surveyAnswers[6]) {
      console.log(`${conColorGreen}Your favorite sport is ${surveyAnswers[5]} and your 'superpower' is ${surveyAnswers[6]}.${conColorReset}\n`);
    }
  }
};

askQuestions(0); // start on question index 0