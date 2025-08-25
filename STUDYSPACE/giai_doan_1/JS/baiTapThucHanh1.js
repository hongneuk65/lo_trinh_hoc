const btnElement = document.getElementById("btnSave");
const myTextElement = document.getElementById("name");

const addText = document.querySelector("#users tbody");

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(btnElement) {
    btnElement.addEventListener("click" , () => {

    const myTodo = {
        id: getRandomInt(1,10000000000),
        name: myTextElement.value
    }

    const currentTodoStr = localStorage.getItem("todo")
    // đã tồn tại todo trước đây
    if(currentTodoStr) {
        //push vào todo
        const currentTodo = JSON.parse(currentTodoStr)

        currentTodo.push(myTodo);
        localStorage.setItem("todo",JSON.stringify(currentTodo))
    }else {
        localStorage.setItem("todo",JSON.stringify([myTodo]))
    }
    
    // success
    window.location.href = "../HTML/baiTapThucHanh1.html"
})
}

// if(addText) {
//     const TextStr = localStorage.getItem("todo");
//     let items = JSON.parse(TextStr);

//     items.forEach((item, index) => {
//         addText.innerHTML += `<tr>
//                 <td>${item.id}</td>
//                 <td>${item.name}</td>
//                 <td><button class = "btnDelete" data-user-id = "${item.id}">xoá</button></td>
//             </tr>`
//     })
//     console.log(items)
//     document.querySelectorAll(".btnDelete").forEach(btn => {
//         // gán event cho button
//         btn.addEventListener("click", () => {
//             // alert("đã click: "+ btn.dataset.userId)
//             //tạo 1 array khác k chứa item đã xoá và gán lại vào array cũ
//             items = items.filter(item => item.id !== Number(btn.dataset.userId));
//             console.log(items)
//             // thêm lại vào localStorage array mới
//             localStorage.setItem("todo", JSON.stringify(items));
//             // xoá luôn phần DOM của item đã xoá
//             btn.parentElement.parentElement.remove();
            
//         })
//     })
    
// }


const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("todo");
    if(todoListStr) {
        const todoList = JSON.parse(todoListStr);
        // console.log(todoList)

        const tbody = document.querySelector("#users tbody")
        if(todoList && todoList.length){
            todoList.forEach((todo, index) => {
                tbody.innerHTML += `<tr>
                        <td>${todo.id}</td>
                        <td>${todo.name}</td>
                        <td><button class = "btn-delete" data-id =${todo.id}>xoá</button></td>
                    </tr> `
            })  
        }
    }
}

generateTodoTable();



const deleteBtns = document.querySelectorAll(".btn-delete");
if(deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        console.log(btn, index);
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            handleDeleteTodo(id);
        })
    })
}

const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("todo");
    if(todoListStr) {
        const todoList = JSON.parse(todoListStr);

        const newTodo = todoList.filter((todo, index) => todo.id + "" !== id );

        localStorage.setItem("todo",JSON.stringify([newTodo]));
        window.location.reload();
    }
}

