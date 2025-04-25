//Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

const longestWord = (sentence) => {
  let newStr = sentence.split(" ");

  let newArr = "";

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length >= newArr.length) {
      newArr = newStr[i];
    }
  }
  return newArr;
};
longestWord("what a wonderful world"); // -> 'wonderful'

module.exports = {
  longestWord,
};
