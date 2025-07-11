const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  repeatString(str, n);
});

const repeatString = (str, n) => {
  const resultArr = [];
  for (let i = 0; i < n; i++) {
    resultArr.push(str);
  }
  console.log(resultArr.join(""));
};
