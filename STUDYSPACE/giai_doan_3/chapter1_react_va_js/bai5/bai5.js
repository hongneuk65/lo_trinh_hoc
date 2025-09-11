// array method

//map 
const myArray = [1, 2, 4, 5];

// const myList = myArray.map((item) => {return 2+ item})

const myList = myArray.map((items, index) => {
    console.log(index, items)
    return items * 2
})
console.log(myList);

// filter
const myList2 = myArray.filter((item) => {
    return item < 4
})

console.log(myList2);