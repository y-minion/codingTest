const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  inverter(str);
});

const inverter = (str) => {
  const invertedArr = [...str].map((char) => {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  });
  console.log(invertedArr.join(""));
};
