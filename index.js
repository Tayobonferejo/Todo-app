const listParent = document.getElementById("todo-list");
const imgDiv = document.getElementById("img-check");
const image = document.getElementById("image");
const todo = document.getElementById("todo");
const doListContainer = document.getElementById("do-list");
const counterOfTask = document.getElementById("counter-list");
const menuDiv = document.getElementById("menu-div");
const clear = document.getElementById("clear");

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
                listItem = document.createElement("div");
                listItem.className = "containerListItem";
                listItem.classList.add("active");
                listItem.setAttribute("draggable", true);

                listItem.innerHTML = `
                <div class="list">
                    <div class="list-image">
                        <img src="/images/icon-check.svg" class="iconInList icon-remove">
                    </div>
                    <div>
                        <p class="textToDo">${todo.value}</p>
                    </div>
                </div>
                <div>
                    <img src="/images/icon-cross.svg" class="remove">
                </div>
                `

                doListContainer.appendChild(listItem);

                todo.value = ""
        }
        
    }
    counterOfTask.textContent = doListContainer.children.length;

})





doListContainer.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.target.classList.contains("remove")) {
        const classList = event.target.closest(".containerListItem");


        if(classList) {
            classList.remove();
        }

        counterOfTask.textContent = doListContainer.children.length;
        
    }

        
    if (event.target.classList.contains("list-image")) {

        const clickedDiv = event.target.closest(".list-image");
        const listDiv = clickedDiv.closest(".containerListItem")
        const iconList = clickedDiv.querySelector(".iconInList");
        const textToDo = listDiv.querySelector(".textToDo");

        if(iconList.classList.contains("icon-remove")) {
            iconList.classList.remove("icon-remove");
            textToDo.style.textDecoration = "line-through";
            listDiv.classList.add("completed");
            listDiv.classList.remove("active");

        }

        else {
            iconList.classList.add("icon-remove");
            textToDo.style.textDecoration = "none";
            listDiv.classList.remove("completed");
            listDiv.classList.add("active");
        }
                    
    } 

});


menuDiv.addEventListener("click", function(event)
{
    event.preventDefault();
    const completedDelete = document.querySelectorAll(".completed");
    const active = document.querySelectorAll(".active");

    if(event.target.id === "active" )
        {
            console.log(completedDelete.length);
            
                for(let i=0; i<completedDelete.length; i++)
                {
                    completedDelete[i].classList.add("hidden");
                }

                  for(let i=0; i<active.length; i++)
                {
                    active[i].classList.remove("hidden");
                }
        }

    
    if(event.target.id === "completed" )
        {
            console.log(active.length);
                 for(let i=0; i<active.length; i++)
                {
                    active[i].classList.add("hidden");
                }

                 for(let i=0; i<completedDelete.length; i++)
                {
                    completedDelete[i].classList.remove("hidden");
                }
        }

    
    if(event.target.id === "all" )
        {
    
                for(let i=0; i<active.length; i++)
                {
                    active[i].classList.remove("hidden");
                }

                  for(let i=0; i<completedDelete.length; i++)
                {
                    completedDelete[i].classList.remove("hidden");
                }
        }
});

 clear.addEventListener("click" , function(event) {
            event.preventDefault();

            const completedDelete = document.querySelectorAll(".completed");
            console.log(completedDelete.length);
            for(let i=0; i<completedDelete.length; i++)
            {
                completedDelete[i].remove();
            }
    })
 