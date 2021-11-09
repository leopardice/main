let string = "марафонАртема";

let firstLetter = "";
let finalString = "";

let lengthOfString = string.length;

function makeFirstLetterUpperCase(string) {
  const isFirstLetterUpperCase = string[0] >= "A" && string[0] <= "Z";

  if (isFirstLetterUpperCase) {
    firstLetter = string[0];
  } else {
    firstLetter = string[0].toUpperCase();
  }

  return firstLetter;
}

function printStringVertically(string) {
  firstLetter = makeFirstLetterUpperCase(string);
  finalString = `${firstLetter}\n`;

  if (lengthOfString > 10) {
    lengthOfString = 10;
  }

  for (i = 1; i < lengthOfString; i++) {
    finalString += string[i] + `\n`;
  }

  console.log(finalString);
}

function printStringHorizontally(string) {
  firstLetter = makeFirstLetterUpperCase(string);
  finalString = `${firstLetter}`;

  for (i = 1; i < lengthOfString; i++) {
    finalString += string[i];
  }

  console.log(finalString);
}

printStringVertically(string);
