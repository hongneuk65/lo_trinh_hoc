// hello world 
console.log('hello world')

// var rat it khi duoc su dung vi pham vi sd bien rong rai 

var name = 'hongnguyen';

const name1 = "hong"

let name2 = 'hocjs';

// let va const gan nhu giong nhau, chi la const la co dinh khong the thay doi

// myAge = 25;    

// dua vao gia tri gan de biet data type
//-------------------------------//
//---------KIEU DU LIEU----------//

//number
const myAge = 20;
const myScore = 9.5;

console.log(myAge , myScore)

//string
const myName = 'nguyen van hong';

console.log(myName)

//boolean: true/false
const isHong = true;

console.log(isHong)

if(isHong) {
    console.log('tui la hong dep trai');
}
else {
    console.log('tui khong phai hong');
}

//Undefined: chua gan gia tri
let chuakhaibao;
console.log(chuakhaibao);

//Null: da dinh nghia nhung khong co gia tri hay gia tri la null
let testNull = null;
console.log(testNull)


//----------------------//
//-------OBJECT---------//

const person = {
    name: 'nguyenvanhong',
    age: 20,
    address: 'NgheAn'
}

console.log(person);


//-------------------//
//-------ARRAY-------//

// const scores = [1,2,3,4,5];
// console.log(scores)


//----------------//
//----TOAN TU-----//

console.log(1+2);

const a = 5;
const b = '5';
console.log(a===b)

//--------------------//
// ----console-------//

console.log('info');
console.error('oop my mistake')
console.warn('test warning')

let name21 = 'nguyen van hong';
let age = 20;

console.log("name: " + name21 + ", age: " + age );

console.log("name:",name, "age:", age);

console.log(name, age);

// co the to mau cho chu 

console.log("%cname","color: red;")

//

const introduction = "toi la: " + name + age + "tuoi";

console.log(introduction); 

const intro = ` my name is ${name} and i'm ${age} `

console.log(intro);  


//----------//
//--ngay-2--//

const fullName = 'nguyenvanhong';

const birthYear = 2005;

let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

const calculatedAge = currentYear - birthYear;

console.log('ho ten:',name);
console.log('tuoi:', currentYear - birthYear);
console.log("la hoc sinh:",isStudent)

console.log(`
    ten: ${name},
    tuoi: ${calculatedAge},
    la hoc sinh: ${isStudent}
`);

//------------//
//--function--//

function  greeting(){
    console.log('haiiiii')
}

greeting();

// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(2,3));

//ARROW FUNCTION

const sum = (a,b) => {           // func vo danh
    return a+b;
}
console.log(sum(2,3));

// (function () {
//     console.log('chay ngay di');
// })();

//-----//
//SCOPE//

let globalVar = 'tôi là biến toàn cục';

function show() {
    console.log(globalVar);
}

show();
console.log(globalVar);



const tingTrungBinh = (toan,van,anh) => {
    return (toan+van+anh)/3;
}

const xepLoai =  (diemTB) => {
    if(diemTB >= 9) {
        return 'xuat sac';
    } else if (diemTB >= 8) {
        return 'gioi';
    }else if(diemTB >= 6.5) {
        return 'kha';
    }else {
        return 'trung binh';
    }
}

console.log(xepLoai(tingTrungBinh(9,9,9)));


//ARRAY

const names = ['hong', 'dinh', 'ket qua'];

console.log(names);

//lấy giá trị trong array

console.log(names[0]);
for( i = 0 ; i < 3; i++) {
    console.log(names[i]);
}


// chỉnh sửa phần tử trong mảng 

names[2] = 'hong va dinh';

for( i = 0 ; i < 3; i++) {
    console.log(names[i]);
}

// thêm xoá phần từ trong mảng 

names.unshift(null);
names.push(true,123);
console.log(names);

names.pop();
names.shift();
console.log(names);

// duyệt mảng 
for( i = 0 ; i < 3; i++) {
    console.log(names[i]);
}

//for-each 

names.forEach(function(value, index){
    console.log("value = ",value, "index =",index);
})
console.log('=============================')
names.forEach((value, index) =>{
    console.log("value = ",value, "index =",index);
})

// map 

const scores = [9, 9, 9, 8.25, 4.25, 3];

scores.forEach((value, index) => {
    console.log("value = ",value, "index =",index);
})

const scoresx2 = scores.map((value, index) => {
    return value * 2; // đây chỉ là logic
})

const otherscoresx2 = scores.map((value, index) => value * 2)

console.log(scoresx2)
console.log(otherscoresx2)

//filter() lọc bớt phần tử theo điều kiện 

const ages = [10, 20, 30, 25, 18, 19]

const agesGreatThan18 = ages.filter((item, index) => {
    return item >= 18;
})

console.log(agesGreatThan18)

// OBJECT 

const sv1 = {
    name: 'hong',
    address: 'nghe an',
    score: 10
}

const sv2 = {
    name: 'dinh',
    address: 'nghe an',
    score: 10
}

sv2.keyTest = "value";
console.log(sv2)
delete sv2.keyTest
console.log(sv2)

const sinhVien = [sv1, sv2];

console.log(sinhVien[1].name)
console.log(sinhVien[1]["name"])
