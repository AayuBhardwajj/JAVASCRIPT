const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: 2014
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publish: 2018,
    edition: 2022
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: 2021
  },
  {
    title: "The Psychology of Money",
    genre: "Finance",
    publish: 2020,
    edition: 2023
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: 2019
  }
];

// let xx=books.filter((bk)=> bk.genre==="Fiction");
let xx=books.filter((bk)=>bk.publish>2000);
console.log(xx);

// nums=[1,2,3,4,5,6,7,8];
// let answer=nums.filter((num)=> num>2); // filter returns a value, for each doesn't.
// console.log(answer);

// let nums=[1,2,3,4,5,6,7,8,9,10];
// let ans= nums.map((x)=>x*10).map((x)=> x+1).filter((x)=> x>80);
// console.log(ans);  

// // Basic difference between filter and map, filter accepts value on the basis of true or false. If condition is true, filter allows the further execution
// // in case of map, map focuses more on modifying the data.

