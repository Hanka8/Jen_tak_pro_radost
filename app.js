let todoList = document.getElementById("todo-list");
let todoInput = document.getElementById("todo-input");
let todoButton = document.getElementById("todo-button");
let vyberBtn = document.getElementById("vyber_btn");

let decoration = document.querySelector(".decoration");

let main = document.querySelector("main");
let body = document.querySelector("body");

let regex = /Odstranit/;

let counter = 0;

    todoButton.addEventListener("click", function() {
      let todo = todoInput.value;

      if (todo) {
        var li = document.createElement("li");
        li.textContent = todo;
        todoList.appendChild(li);
        todoInput.value = "";

        let button = document.createElement("button");

        button.className = "remove-button";
        button.textContent = "Odstranit";

        button.addEventListener("click", function() {
          todoList.removeChild(li);
          counter--;
        });

        counter++;

        li.appendChild(button);
        todoList.appendChild(li);

        todoInput.value = "";
      }
    });

    vyberBtn.addEventListener("click", function() {
        let randomNumber = Math.floor(Math.random() * counter);
        let chosenOption = todoList.children[randomNumber];
        chosenOption.style.color = "#354954";

        let modal = document.createElement("div");
        let modalContent = document.createElement("div");
        let modalChouice = document.createElement("p");
        let modalBtn = document.createElement("button");
        
        modal.classList.add("modal");
        modalContent.classList.add("modal-content");
        modalChouice.classList.add("modal-choice");
        modalBtn.classList.add("modal-btn");

        body.classList.add("modal-open");

        modalBtn.textContent = "Znova";
        modalBtn.addEventListener("click", function() {
            window.location.reload();
        });

        modalChouice.textContent = (chosenOption.textContent).replace(regex, "");
        
        document.body.appendChild(modal);
        modal.appendChild(modalContent);
        modal.appendChild(modalChouice);
        modal.appendChild(modalBtn);

        //wait 2 seconds
        setTimeout(function() {
          modal.classList.add("shown");
        }, 2000);
        
        decoration.classList.add("deco");
    });

