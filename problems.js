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


// Q3: You are given an array of objects representing books 
// in a library. Each book object has the following properties

// const books = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.2 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.5 },
//   { title: "1984", author: "George Orwell", rating: 4.8 },
//   { title: "Pride and Prejudice", author: "Jane Austen", rating: 4.1 },
// ];

// Your task is to perform the following steps:

// 1)Find the book with the highest rating using array.find.
// 2)Sort the books in descending order of their ratings using array.sort.
// 3)Create an array containing only the titles of the books using array.map.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.2 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.5 },
  { title: "1984", author: "George Orwell", rating: 4.8 },
  { title: "Pride and Prejudice", author: "Jane Austen", rating: 4.1 },
];

// Problem no 1
const highestRated = books.find((book) => book.rating === Math.max(...books.map((book) => book.rating)) );

// problem no 2
const sortBooks = books.sort((a,b) => b.rating = a.rating);

//Problem no 3
const bookTitles = books.map((book) => book.title);

// Q4: You must implement a function that returns the difference between the largest and the smallest value 
// in a given list / array (lst) received as the parameter.
// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

function maxDiff(list) {
  //First we will sort the List.
   const sortedList = list.sort((a,b) => a - b);
  //then we will extract the first and last value of list, and if the list contain more than 1 number subtract the smallest valuw with largest
   // else return 0;
   if (sortedList.length > 1) {
     return sortedList[sortedList.length - 1] - sortedList[0]
   }
     return 0
};  

// Q5: Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6


function lostSheep(friday,saturday,total){
  return total - (friday.reduce((acc, sheep) => acc += sheep, 0) + 
                  saturday.reduce((acc, sheep) => acc += sheep, 0))
}


// Q6 : Reverse a message so that the words and letters passed into it 
// are made lower case and reversed. In addition, capitalise the first 
// letter of the newly reversed words. If a number or symbol(!#,>) is 
// now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

function reverseMessage(str) {
  const reversedStr =  str.split("").reverse().join("").toLowerCase();
  return  reversedStr.split(" ").map((s) => (/^[a-zA-Z]/.test(s)) ? s[0].toUpperCase() + s.slice(1) : s).join(" ");
 }


//  Q7: Create a function that takes a number and finds the factors of it, listing them in descending order in an array.
//  If the parameter is not an integer or less than 1, return -1. In C# return an empty array.
//  For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]

function factors(x) {
    const factorsArr = [];

    if (!Number.isInteger(x) || x < 1 ) {
      return -1;
  } else {
    for (let i = x; i >= 1; i--) {
      if (x % i === 0) {
        factorsArr.push(i)
      }
    }
      return factorsArr;
  }  
  }
 
 