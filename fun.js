const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();
async function start() {
  let question = await ask("Did everyone enjoy the project? \n>_");
  if (question === "y") {
    console.log("Hooray! We've completed our first major project!");
  } else {
    console.log("We'll get em next time then!");
  }
  process.exit();
}
