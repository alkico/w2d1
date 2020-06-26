// console.log(document.body);

// target an element via it's id
const todoList = document.getElementById("todo-list");

// console.log(todoList);
// returns html collection it is not an array but can be treated like one
const allListItems = document.getElementsByTagName("li");

// console.log(allListItems[2]);

// you can turn an html collection into an array
// [...allListItems] - Array.from(allListItems);

const todoListItems = todoList.getElementsByTagName("li");

// todoListItems[2].innerText = "solve katas";

// console.log(todoListItems[2].innerText);

// console.log(todoListItems);

// turn all the content of the todo list items to uppercase

// we iterate through the list and change the inner text of each element
// for (let i = 0; i < todoListItems.length; i++) {
//   todoListItems[i].innerText = todoListItems[i].innerText.toUpperCase();
// }

for (const item of todoListItems) {
  item.innerText = item.innerText.toUpperCase();
}
// targets all elements where the class has `todo-container`
const container = document.getElementsByClassName("todo-container");
// console.log(container[0]);

// selects all elements using a css selector - returns a node list
// const container = document.querySelectorAll('.todo-container');
// console.log(container);

// selects the first element that matches a querySelectorAll
const firstItem = document.querySelector("#todo-list li");
// console.log(li);
// change style of element
// firstItem.style.backgroundColor = "red";
// firstItem.style["background-color"] = "red";

// access the className or the classList and change it
// overwrites the class
// firstItem.className = "checked";
// adds to the class / classes
// firstItem.classList.add("checked");

// firstItem.classList.remove("b");

// toggles - if it is there it removes, if it is not there it adds
// firstItem.classList.toggle("a");
// firstItem.classList.toggle('a');

// set Attributes
firstItem.setAttribute("id", "first-item");
const attribute = firstItem.getAttribute("id");
// console.log(attribute);
// firstItem.removeAttribute("id");

// we can fix the broken image
document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://images.unsplash.com/photo-1564258646808-fac8e26166a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
  );

// we wanna add a heading
// we create it
// // const todoList = document.getElementById('todo-list');
const heading = document.createElement("h1");
heading.innerText = "My Todo List";
const parentElement = document.querySelector(".todo-container");
parentElement.insertBefore(heading, todoList);

// let's use javascript to remove the p tag
const paragraph = document.getElementsByTagName("p")[0];
parentElement.removeChild(paragraph);

// create a new list item
const newListItem = document.createElement("li");

// newListItem.innerText = "watch westworld";
// you can also add html:
newListItem.innerHTML = "watch <strong>westworld</strong>";

//alternative way to add text to an element to innerHTML
const text = document.createTextNode("This text is created dynamically");

// and add it to the dom
todoList.appendChild(newListItem);
todoList.appendChild(text);

// I can add an event listener directly in the html
// onclick = "trigger()";
// function trigger() {
//   console.log("click");
// }

document.getElementById("add-todo").onclick = addTodo;

function addTodo() {
  // test basic functionality - connection
  // console.log('click');
  const newTodo = document.createElement("li");
  const input = document.querySelector("input");
  // console.log(input.value);
  newTodo.innerText = input.value;
  const parent = document.getElementById("todo-list");

  parent.appendChild(newTodo);
  // have to add this onclick here because it is a new element and the loop
  // on line 119 did take this in regard
  newTodo.onclick = toggleTodo;
  // clear the input
  input.value = "";
}

// add an onclick on all elements of the list
document.querySelectorAll("#todo-list li").forEach(function (item) {
  item.onclick = toggleTodo;
});

// we wanna add the functionality that whenever we click on a word on the todo list
// the class 'checked' gets toggeled
function toggleTodo(event) {
  console.log(event);
  // console.log(event.currentTarget.classList);
  event.currentTarget.classList.toggle("checked");
}

//Getting the current node object using the event object
// The event object (sometimes referred as e) is an object inherited in every event we create.
let theUl = document.querySelector(".list"); // gets the "ul" element

//console.log(theUl.childNodes); // ==> check what's in the console

theUl.childNodes.forEach((theLiTag) => {
  theLiTag.onclick = function () {
    console.log(theLiTag.innerHTML);
    theUl.removeChild(theLiTag);
  };
});
