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