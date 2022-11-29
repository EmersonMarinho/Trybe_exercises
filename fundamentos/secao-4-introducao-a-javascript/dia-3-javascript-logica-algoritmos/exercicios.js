const factorialOf = (integer) => {
  let factorial = 1;

  for (let i = 1; i <= integer; i++) {
    factorial *= i;
  }

  return factorial;
};

console.log(factorialOf(5));

let word = "tryber";
let reverseWord = "";

reverseWord = word.split("").reverse("").join("");

console.log(reverseWord);

let array = ["java", "javascript", "python", "html", "css"];

let biggestWord = array[0];
let smallestWord = array[0];

for (arr of array) {
  if (arr.length > biggestWord.length) {
    biggestWord = arr;
  }
}

for (arr of array) {
  if (arr.length < smallestWord.length) {
    smallestWord = arr;
  }
}

console.log(biggestWord);
console.log(smallestWord);

let lowestNumber = 2;
let highestNumber = 50;
let largest = 0;

for (let i = lowestNumber; i <= highestNumber; i++) {
  let number = 0;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      number = 1;
      break;
    }
  }
  if (i > 1 && number == 0) {
    console.log(i);
  }
}
