// Q1: You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores. Note: the scores will always be unique (so no duplicate values)

function myLanguages(results) {
  const myLangs = [];
  for (let key in results) {
    let val = results[key];
    if (val >= 60) {
      myLangs.push({ lang: key, score: val });
    }
  }
  const langs = myLangs.sort((a, b) => b.score - a.score);
  const sortedLang = langs.map((entry) => entry.lang);
  return sortedLang;
}


// Q2:  An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) {
  
  test = test.toLowerCase();
  original = original.toLowerCase();
  
 let testArr = test.split("");
 let originalArr = original.split("");
  
  let sortedTest = testArr.sort();
  let sortedOriginal = originalArr.sort();
  
 if(sortedTest.join("") === sortedOriginal.join("")) {
   return true
 } return false
};
