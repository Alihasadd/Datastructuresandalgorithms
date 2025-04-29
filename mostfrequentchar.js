//Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

const mostFrequentChar = (s) => {
    let toniBraxton = {};
      for(let char of s){
      if(!(char in toniBraxton)){
        toniBraxton[char] = 0;
      }
        toniBraxton[char] += 1;
    }
    let best = null
    for(let char of s){
      if (best === null || toniBraxton[char] > toniBraxton[best]){
        best = char;
      }
    }
  
    return best;
  };
  
  mostFrequentChar('bookeeper'); // -> 'e'
  
  
  module.exports = {
    mostFrequentChar,
  };
  