console.log("Async&Await");

// promise 
fetch("http://localhost:8000/users")
.then(res => res.json())
.then(data => console.log("fetch promise: ", data))

//async await 

const fetchData = async() => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("async await:",data)
}

fetchData();
