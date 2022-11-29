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
