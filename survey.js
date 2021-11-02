// The example usage shown at the beginning
// The .question(query, callback) function
// The .close() function

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {

  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (listen) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`My name is ${name}. I love listing to ${listen} while ${activity}. My favorite meal of the day is ${meal}. For ${meal} my favorite food to eat is ${food}. I love ${sport} and my superpower is ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

console.log('chedar');