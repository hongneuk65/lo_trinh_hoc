//never: thường dùng cho trình compiler đọc

function handleException (errorMesssage: string): never {
    throw Error(errorMesssage)
    
}

function runInfinity(): never {
    while(true) {
        console.log("running...");
    }
}

let a = runInfinity;
console.log(a);
handleException('test error');