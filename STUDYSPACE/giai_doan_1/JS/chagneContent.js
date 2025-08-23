//change content 
const myBtnElement = document.getElementById("myBtn")
const backBtnElement = document.getElementById("backBtn")

const myTextElement = document.getElementById("myText")

console.log(myBtnElement,myTextElement)

myBtnElement.addEventListener("click", () => {
    myTextElement.innerText = "just the content";
})

backBtnElement.addEventListener("click", () => {
    myTextElement.innerHTML = "<strong>BEFORE</strong>";
})
 