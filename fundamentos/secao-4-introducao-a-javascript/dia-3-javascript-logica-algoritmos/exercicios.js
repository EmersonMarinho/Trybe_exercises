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
