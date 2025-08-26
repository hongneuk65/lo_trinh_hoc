const fetchBlogs = async() => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();

    const tbody = document.querySelector("#blogs tbody")
    if(data && data.length){
        data.forEach((blogs, index) => {
             tbody.innerHTML += `<tr>
                    <td>${blogs.id}</td>
                    <td>${blogs.title}</td>
                    <td>${blogs.author}</td>
                    <td>${blogs.content}</td>
                    <td><button class = "delete-blog" data-id = "${blogs.id}">Xoá</button></td>
                </tr> `
        })  
        
    }

}
const addNewRowToEnd = (blogs) => {
        const tableBody = document.querySelector('#blogs tbody');
    // Tạo phần tử dòng mới
    const newRow = document.createElement('tr');
    // Gán HTML cho dòng
    newRow.innerHTML = `<tr>
                    <td>${blogs.id}</td>
                    <td>${blogs.title}</td>
                    <td>${blogs.author}</td>
                    <td>${blogs.content}</td>
                    <td><button class = "delete-blog" data-id = "${blogs.id}">Xoá</button></td>
                </tr> `;
    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);
}

const handleAddNewBlog = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");
    const saveBlogBtn = document.getElementById("saveBlog");

    saveBlogBtn.addEventListener("click", async (e) => {
        e.preventDefault(); 
        console.log(title.value,author.value,content.value);

        // call API to create a new blog
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value, 
                author: author.value, 
                content: content.value
            })
        });
        const data = await rawResponse.json();
        addNewRowToEnd(data);
    })
    
}

const handleDeleteBtns = () => {
    const btns = document.querySelectorAll(".delete-blog")
    console.log(btns)
    if(btns) {
            btns.forEach((btn, index) => {
                btn.addEventListener("click", async() => {
                    const id = btn.getAttribute("data-id");
                            // call API to create a new blog
                        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                            method: 'DELETE',
                            headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            }
                        });
                        // delete row
                        const row = btn.closest("tr");
                        row.remove();
                })
                console.log(btn)
            })
    }
}


fetchBlogs().then( () => {   // vì handledelete đang chạy đồng bộ nên nó sẽ lấy phần của HTML mà lúc này HTML không có gì, nên phải chờ cho fetch chạy trước rồi mới delete được 
    handleDeleteBtns();
});
handleAddNewBlog();
handleDeleteBtns();