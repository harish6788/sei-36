// # Filter
//
// 1. Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// ## Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'
//
// # Bonus question
//
// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'.
// Super extra bonus points for proving "how well engineered Javascript really is".

const duplicateRemover = function(array){
  let newArray = [];
  for (let i=0;i<array.length;i++){
    if (newArray[i] !== array[i]){
      newArray = newArray.push(array[i]);
    return newArray;
    }
  }
return newArray;
};


console.log(duplicateRemover(['ram','beem','gopu','ram','joel','beem','joel']));
//
// const wordFinder = function(str){
//   const words = str.split('');
//   const output = [];
//   for (let i=0;i<words.length;i++){
//     if (!output.includes(words[i])){
//     output.push(words[i])
// }
// }const outString = output.join('')
// return outString;





(words)
//     }

//   }
// }
