const listParent = document.getElementById("todo-list");
const imgDiv = document.getElementById("img-check");
const image = document.getElementById("image");
const todo = document.getElementById("todo");

// listParent.addEventListener("click" , (event) => {

//     if(event.target) {

//         if(todo.value = "") {
//             alert("enter a todo task")
//         }

//         else {
//                 image.style.display = "block";
//                 alert("enter a todo task")
//                 console.log(todo.value);
//         }

        

//     }
// })

imgDiv.addEventListener("click" , (event) => {

    if(event.target) {

        if(todo.value = "") {
            alert("enter a todo task")
        }

        else {
                image.style.display = "block";
                alert("enter a todo task")
                console.log(todo.value);
        }

        

    }
})
