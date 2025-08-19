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

const scores = [1,2,3,4,5];
console.log(scores)


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




