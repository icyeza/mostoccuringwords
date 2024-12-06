const paragraph = document
  .getElementById("myParagraph")
  .innerText.toLocaleLowerCase();
const splitedWords = paragraph.split(/[\s\,\.\:\;]+/);
const countedWords = new Map();
splitedWords.forEach((word) => {
  if (countedWords.has(word))
    countedWords.set(word, countedWords.get(word) + 1);
  else countedWords.set(word, 1);
});
// const occurences = countedWords.values;
const sortedWords = Array.from(countedWords).sort((a, b) => b[1] - a[1]);
const the12Occurent = sortedWords.slice(0, 12).map((element) => element[0]);

console.log(the12Occurent);
