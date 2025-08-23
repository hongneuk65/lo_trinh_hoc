console.log("1");

setTimeout(() => {
    console.log("2");
}, 2000)

console.log("3");


const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("2 kkkkkk");
        //return
        resolve("toi la hong")
        }, 2000)
    })
}

const test = myPromise();
console.log(test)