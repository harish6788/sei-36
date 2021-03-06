// Strings
// These exercises will test your knowledge of string functions, conditionals,
//  and arrays. For many of them, you will want to consult the JavaScript strings
// reference to find useful string methods to call.
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount,
 // and return ' dollars', except it will add '(pinky)' at the end if the amount
 // is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
  const drEvil = function(amount)
  {
  if(amount === 1000000)
  {
  return `${amount} dollars (pinky)`;
  }
  else
  {
  return `${amount} dollars`;
  }
}
console.log(`drEvil for 10 is ${drEvil(10)}`);
console.log(`drEvil for 1000000 is ${drEvil(1000000)}`);

// MixUp
// Create a function called mixUp. It should take in two strings, and return the
 // concatenation of the two strings (separated by a space) slicing out and swapping
 // the first 2 characters of each. You can assume that the strings are at least 2
 // characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'

const mixUp = function( str1 , str2)
{
var part1 = str1.slice(0,2),
    part2 = str2.slice(0,2),
    newstr1 = str1.replace(part1, part2),
    newstr2 = str2.replace(part2, part1);
    console.log(`Changed String are: ${newstr1} and ${newstr2} ` );
}



// Look up the JavaScript string reference to find methods which may be useful!
// FixStart
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurences of its first character have been
// replaced with '*', except for the first character itself. You can assume that
// the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function(string1)
{
  var str = string1.slice(1,string1.length);
  var alphabet = string1[0];
  var string2 = '',
      charac;
  for(i=0; i< str.length; i+=1 )
  { if (str[i] == alphabet)
    {
      string2 += "*";
    }
  else
    {
      charac = str[i];
      string2 += charac;
    }
  }
  string2 = alphabet + string2;
  // console.log(`New String :" ${string2}`);
  return string2;
}
console.log(`fixStart('babble'): ${fixStart('babble')}`);

// Verbing
// Create a function called verbing. It should take a single argument, a string.
 // If its length is at least 3, it should add 'ing' to its end, unless it already
 // ends in 'ing', in which case it should add 'ly' instead. If the string length
 // is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// Not Bad

const verbing = function(str)
{
  var str1 = str.substr(-3);
if (str.length >=3 )
  {
    if ( str1 === 'ing' )
    { str = str + 'ly';
      return str;
    }
    else
    {
    str = str + "ing";
    return str;
    }
   }
 else
    return str;
  }
console.log(`verbing('swim'):  ${verbing('swim')}`);
console.log(`verbing('swimming'):  ${verbing('swimming')}`);
console.log(`verbing('go'):  ${verbing('go')}`);

// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
 // substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just
// return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
  // notBad('This movie is not so bad!'): 'This movie is good!'
  // notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function (string1)
{
  var indexNot = string1.indexOf("not");
  var sub , sublength;
  if (indexNot != -1)
  {
  subindex = indexNot + 1;
  sub = string1.substr(subindex,string1.length);
  if (sub.indexOf("bad"))
  {
    string1 = string1.slice(string1[0],indexNot - 1);
    return (string1 = string1 + " good!");
  }
  }
  else {
    return string1;
  }
}

console.log( `This dinner is not that bad! is converted to ${notBad('This dinner is not that bad!')} `);
console.log( `This movie is not so bad! is converted to ${notBad('This movie is not so bad!')} `);
console.log( `This dinner is bad! is converted to ${notBad('This dinner is bad!')} `);
