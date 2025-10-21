const listParent = document.getElementById("todo-list");
const imgDiv = document.getElementById("img-check");
const image = document.getElementById("image");
const todo = document.getElementById("todo");
const doListContainer = document.getElementById("do-list");
let listItem 

const iconList = document.querySelectorAll(".iconInList");
const listImage = document.querySelectorAll(".list-image");


imgDiv.addEventListener("click" , (event) => {

    event.preventDefault();

    if(event.target.id === "img-check") {

        if(todo.value.trim() === "") {
            alert("enter a todo task")
        }

        else {
                console.log(todo.value);
                listItem = document.createElement("div");
                listItem.className = "containerListItem";
                listItem.innerHTML = `
                <div class="list">
                    <div class="list-image">
                        <img src="/images/icon-check.svg" class="iconInList">
                    </div>
                    <div>
                        <p class="textToDo">${todo.value}</p>
                    </div>
                </div>
                <div>
                    <img src="/images/icon-cross.svg">
                </div>
                `

                doListContainer.appendChild(listItem);

                todo.value = ""
        }
        
    }

})





doListContainer.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.target.tagName === "IMG") {
        listItem.remove();
    }

        
    if (event.target.classList.contains("list-image")) {
        const iconList = document.querySelector(".iconInList");

        if(iconList) {
            iconList.style.display = "block";
        }

        else {
            console.warn("No .iconInList found inside:", event.target);
        }
            
    }


        

});
