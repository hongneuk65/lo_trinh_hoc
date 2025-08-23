const element = document.getElementById("myButton")

console.log(element)

// function handleClickBtn() {
//     console.log("you click a button");
// }

// lắng nghe sự kiên với addEventListener 

const handleClickBtn = () => {
    console.log("you click a button");
}
element.addEventListener("click",handleClickBtn);

