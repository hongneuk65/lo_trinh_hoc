console.log("try and catch");

const doSomeThing = () => {
    const a = 10, b = 1;
    if(b === 0) {
        throw new Error("thực hiện chia cho 0")
    }
    return a/b;
}

try {
    doSomeThing();
} catch (error) {
    console.log(" có lỗi nè", error)
} finally {
    console.log("run final");
}



