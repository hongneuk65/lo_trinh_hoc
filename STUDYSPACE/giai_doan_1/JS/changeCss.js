const myBtnElement = document.getElementById("BtnColor");
const myTextElement = document.getElementById("myText");
const backBtnElement = document.getElementById("BackBtn");

myBtnElement.addEventListener("click", () =>{
    myTextElement.style.color = "red"
    myTextElement.style.backgroundColor = "green"
    myBtnElement.style.color = "red";
    myTextElement.classList.add("hong")
})

backBtnElement.addEventListener("click", () =>{
    myTextElement.style.color = "black"
    myTextElement.style.backgroundColor = "unset"
    myBtnElement.style.color = "black";
    myTextElement.classList.remove("hong")
})