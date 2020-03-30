// console.log(document.body);

// target an element via it's id
const todoList = document.getElementById('todo-list');

// console.log(todoList);
// returns html collection
const allListItems = document.getElementsByTagName('li');

// console.log(allListItems[2]);

// you can turn an html collection into an array
// [...allListItems]  -  Array.from(allListItems)

const todoListItems = todoList.getElementsByTagName('li');

// todoListItems[2].innerText = 'solve katas';

// console.log(todoListItems[2].innerText);

// console.log(todoListItems);

