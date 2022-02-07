/*global dayjs */

const dayjs = require("dayjs");

console.log("Hello from javascript");
console.log(dayjs().format());
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}
console.log(square(2, 4, 6, 8, 225, 11.5, 21.3));

let name = "jimmy",
  time = "tuesday";
const greeting = `Hey ${name}! Hows your ${time} been?`;
console.log(greeting);
