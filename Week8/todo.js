console.log("Bah pardner");

const todoList = [];

todoList.push("Sweep the ceiling");

console.log(todoList);

todoList.push("Mow the living room");

todoList.push("Cook the peanut butter");

console.log(todoList);

todoList.pop();
// .pop takes off last item on list
console.log(todoList);

for (let index = 0; index < todoList.length; index++) {
    console.log(index);
    console.log(todoList[index]);    
}