const btn = document.getElementById("submitBtn");
const input = document.getElementById("name")
const printer = document.getElementById("input");

const prevElement = document.getElementById("previous");
const prevName = localStorage.getItem("key")
if(prevName) {
    prevElement.innerHTML = `<b>${prevName}</b>`
}

btn.addEventListener("click", () => {
    console.log(input.value)
    localStorage.setItem("key", input.value);
    printer.innerHTML = `<b>${input.value}</b>`
})



