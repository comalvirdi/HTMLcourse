var todos = ["walk dog"];
window.setTimeout(function() {
    var input = prompt("What would you like to do?");

    while (input !== "quit"){
        if (input === "list"){
            todos.forEach(function(todoItem, index){
                console.log(index + ": "+ todoItem);
            });
        }
        else if (input === "new"){
            var newToDo = prompt("Enter new todo");
            todos.push(newToDo)
        }
        else if (input === "delete"){
            var index = prompt("Enter index of Item to be deleted");
            todos.splice(index, 1);
            console.log("Item Deleted");
        }
        input = prompt("What would you like to do?");
    }
    console.log("Ok you quit the app");

}, 500);


