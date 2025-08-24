console.log("callback")

const greetning = (name, callback) => {
    console.log(`xin chào ${name}`);
    callback();
}

const hello = () => {
    console.log("learn callback....")
}

const sayHi = () => {
    console.log("say hi....")
}

greetning("Hồng", hello);
greetning("Hồng đẹp trai", sayHi);

// callback hell: callback lồng nhau => tránh việc sử dụng 

// sử dụng nhiều async await 