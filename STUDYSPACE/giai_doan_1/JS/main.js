// ham built-in

// console  hiển thị ra ở phần console
// console.log('day la 1 dong log')

// comfirm hiển thị ra thong báo có cancel và ok
// confirm('xac nhan ban du tuoi');

//prompt hiện thị ra thông báo và có phần cho người dùng nhập dữ liệu
// prompt('xac nhan ban bao nhieu tuoi');

//set timeout  chạy 1 hàn function sau thời gian nào đó 
/*setTimeout(function() {
    alert('thong bao')
}, 1000)*/

//set interval  chạy liên tục 1 hàm sau 1 thời gian nào đó
/*setInterval(function() {
    console.log('he')
}, 1000)*/


/**
 * toán tử số học - arithmetic
 * toán tử gán - assignment 
 * toán tử so sánh - comparison
 * toán tử logic - logical 
 */


/* toán tử số học
+ --> cộng  lúc là chuối thì nó là toán tử nối 
- --> trừ
* --> nhân
** --> luỹ thừa( mũ)
/ --> chia
% --> chia lấy dư
++ --> +1
-- --> -1 
*/

// kiểu dữ liệu nguyên thuỷ 
/**
 * number 
 * string
 * boolean
 * undefined 
 * null
 * symbol
 */

/** dữ liệu phức tạp
 * function
 * object object 
 */



// var myString = 'nguyen, van, hong, hong, hong, hong         '

// console.log(myString.length)

// console.log(myString.search('van'))

// console.log(myString.slice(-6,-1))

// console.log(myString.replace(/hong/g, 'hung'))

// console.log(myString.toUpperCase())

// console.log(myString.trim())

// console.log(myString.split(', '))

// console.log(myString[10])


// hàm 

// function showDialog() {
//     for(var param of arguments){
//         // console.log( `${param}` )
//     }
// }

// tham số trong hàm 

// showDialog('hahahaha','hahahahah')


// function cong(a,b){
//     return a+b;
// }

// console.log(cong(2,8))

// 3 laoij function 
// 1 declaration func 
// 2 


//Object
// var myInfo = {
//     name:'hong',
//     age: 20,
//     getName: function() {
//         return this.name;
//     }
// }

// var myKey = 'address'


// myInfo[myKey]= 'nghe an'
// myInfo.address = 'ha noi'

// delete myInfo.age; // xoá 

// console.log(myInfo.getName())


// Object contructor

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// prototype - gần giống như tạo thuộc tính vào bên trong đối tượng 
// User.prototype.className = 'IT65B'
// User.prototype.getClassName = function () {
//     return this.className
// }

// var author = new User('hong', 'nguyen', 'avatar');
// var user = new User('hong', 'van', 'avatar');

// console.log(author.className)
// console.log(user.getClassName())

// ||** đối tượng date **||

// var date = Date();

// console.log(date)

// ||** câu lệnh rẽ nhánh **||

// ||**toán từ 3 ngôi **||

// var course = {
//     name: 'javascript',
//     coin: 250
// }

// if (course.coin>0) {
//     console.log(`${course.coin} coins`)
// } else {
//     console.log('mien phi')
// }

// var result = course.coin > 0?  `${course.coin} coins` : 'mien phi';

// console.log(result)

// ||** vòng lặp **||
/*
1. for - lặp với đièu kiẹn đúng
1. for/in - lặp qua key của đối tượng
3. fo/ò - lặp qua value của đối tượng
4. while - lặp điều kiện đúng
5. do/while - lặp ít nhất 1 lần sau đó lặp khi đúng
 */

// ||** for loop **||

// for(var i = 1; i<1000; i++) {
//     // console.log(i)
// }

// ||** for/in  **||

// var myInfo = {
//     name:'hong', 
//     age: 20
// }

// for(var key in myInfo) {
//     // console.log(myInfo[key])
// }

// ||** for/of **||

// for(var value of languages) {
//     //  console.log(value)
// }

// ||** method array **||

// let courses = [
//     {
//         id: 1,
//         name: 'javascript',
//         coin:7
//     },
//     {
//         id: 2,
//         name: 'html',
//         coin:0
//     },
//     {
//         id: 3,
//         name: 'css',
//         coin:1
//     },
//     {
//         id: 4,
//         name: 'php',
//         coin:0
//     },
//     {
//         id: 5,
//         name: 'javascript',
//         coin:5
//     },
//     {
//         id: 6,
//         name: 'javascript',
//         coin:100
//     }
// ]

// courses.forEach(function(course, index){  // duyệt qua từng phần tử của mảng 
//     console.log(index,course)
// });

// let isFree = courses.every(function(course, index){   //kiểm tra every mảng thoả mãn 1 điều kiện nào đó
//     return courses.coin === 0;
// });

//     // console.log(isFree)

// let isFree2 = courses.some(function(course, index){   //kiểm tra some thoả mãn 1 điều kiện nào đó 
//     return courses.coin === 0;
// });
//     // console.log(isFree2)


// let course = courses.find(function(course, index){  // duyệt qua từng phần tử của mảng 
//     return course.name === 'html';  
// });

//     // console.log(course); // luôn chỉ trả về 1 đối tượng


// let course2 = courses.filter(function(course, index){  // duyệt qua từng phần tử của mảng 
//     return course.name === 'javascript';  
// });

    // console.log(course2); // trả về nhiều phần tử 


// ||** map  **||

// function courseHandler(course){
//     // console.log(course)
//     return{
//         id: course.id,
//         name: `khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `gia: ${course.coin}`
//     }
// };

// let newCourses = courses.map(courseHandler);

    // console.log(newCourses)


// ||** reduce **||

// let totalCoin = 0;

// for(let course of courses ) {
//     totalCoin += course.coin;
// }

// console.log(totalCoin)

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {    // accumulator: biến lưu trữ
//     return accumulator += currentValue.coin;
// }

// let totalCoin = courses.reduce(coinHandler, 0);  //inittial value

// console.log(totalCoin)

// let totalCoin = courses.reduce((a,b) => a+b.coin, 0);   // giá trị khởi tạo không bắt buộc phải có, nhưng ảnh hưởng đến reduce chạy 

// console.log(totalCoin)


// ||** Flat - làm phẳng mảng từ depth array  **||

// let depthArrray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

// let flatArray = depthArrray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem)  // concat sẽ gộp 2 mảng thành 1 mảng mới
 
// }, [])

// console.log(flatArray)


// lấy ra các khoá học đưa vào 1 mảng 
// let topics = [
//     {
//         topic: "frontend",
//         courses: [
//             {
//                 id: 1,
//                 title: 'HTML',
//             },
//             {
//                 id: 2,
//                 title: 'CSS'
//             }
//         ]
//     },

//     {
//         topic: "backend",
//         courses: [
//             {
//                 id: 1,
//                 title: 'PHP',
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS'
//             }
//         ]
//     },
// ]


// let newCourses = topics.reduce(function(courses,topic) {
//     return courses.concat(topic.courses)
// }, []);

// console.log(newCourses);

// let HTML = newCourses.map(function(course) {
//     return `<div>
//     <h2>${course.title}</h2>
//     </div>`;
// })

// document.getElementById('change').innerHTML = HTML


// ||** includes method **||   có sẵn trong array và string 



// console.log(Array.prototype.includes)

// let title = 'reponsive'

// console.log(title.includes('re', )) // khi không có thì mặc định vị trí 0

// let courses = ['java','HTML']

// console.log(courses.includes('java', -3))


/*

    Math object

    - Math.PI         đưa ra số pi
    - Math.round()    làm tròn số
    - Math.abs()      trị tuyệt đối 
    - Math.cei()      làm tròn trên VD: 4.1 = 5
    - Math.floor()    làm tròn dưới
    - Math.random()   số thập phân ngẫu nhiên < 1
    - Math.min()      tìm ra số nhỏ nhất
    - Math.max()      tìm ra số nhỏ nhất

 */

    // console.log(Math.floor(Math.random() * 10))

    // Callback 

    // là hàm được truyền qua đối số
    // khi gọi hàm khác 

    // 1. là hàm
    // 2. được truyền qua đối số

    // function myFunction(param) {
        // param('học lập trình')
    // }

    // function myCallback(value){
        // console.log('value:', value)
    // }

    // myFunction(myCallback)

// cách map hoặt động

// let courses = [
//     'javascript',
//     'PHP',
//     'ruby'
// ];
    

// Array.prototype.map2 = function(Callback) {
//     let output = [];
//     let arrayLength = this.length;
//     for(let i = 0; i < arrayLength ; ++i) {    // lặp qua gọi callback 
//         let result =  Callback(this[i], i)     // nhận kết quả return từ callback
//         output.push(result);                    
//     }
//     return output

// }


// let htmls = courses.map2(function(course, index) {   // mỗi lần lăp qua truyền callback vào 
//     return `<h2>${course}</h2>`
// });

// console.log(htmls)


// chọn forEach, reduce, find, filter đêr viét ra
    

// Array.prototype.forEach2 = function(callback) {
//     // let arrayLength = this.length;
//     for (let index in this) {
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this)      

//         }           // kiểm tra xem có duyệt qua proto không, nếu key trong proto thì false
//     }
// }

// let course = new Array(100);

// courses.forEach2(function(course, index) {
//     console.log(index, course)
// });



// tự viết lại reduce 

// let courses = [
//     {
//         id: 1,
//         name: 'javascript',
//         coin:150
//     },
//     {
//         id: 2,
//         name: 'html',
//         coin:50
//     },
//     {
//         id: 3,
//         name: 'css',
//         coin:50
//     },
//     {
//         id: 4,
//         name: 'php',
//         coin:150
//     },
//     {
//         id: 5,
//         name: 'javascript',
//         coin:200
//     },
//     {
//         id: 6,
//         name: 'javascript',
//         coin:100
//     }
// ]

// Array.prototype.reduce2 = function(callback, init) {

//     let hasInitialValue = arguments.length >= 2;  // kiểm tra xem số đầu vào có >=2 không( vì nếu = 2 thì có thêm init)
//     let total =  hasInitialValue ? init : this[0];   
//     let star = hasInitialValue ? 0 : 1;



//     let arrayLength = this.length;
//     for(let i = star; i < arrayLength; ++i) {
//         total = callback(total, this[i])
//     }
//     return total;

// }

// let total = courses.reduce2(function(total,element) {
//     return total + element.coin;
// }, 0 );

// console.log(total)

// ||**tự viết filter**||

// Array.prototype.filter2 = function(callback) {

//     let output = []

//     for (let index in this) {
//         if(this.hasOwnProperty(index)) {
//             let result = callback(this[index], index, this)
//             if(result) {
//                 output.push(this[index]);
//             }
//         }
//     }

//     return output
// }

// let filterCourses = courses.filter2(function(course, index, array) {
//     return course.coin > 150;
//     // console.log(course, index, array, 'hello')
// })

// console.log(filterCourses)


// ||**tự viết some**||   trả về true/ false

// let courses = [
//     {
//         isFinish: false,
//         name: 'html',
//         coin:50
//     },
//     {
//         isFinish: false,
//         name: 'css',
//         coin:50
//     },
//     {
//         isFinish: false,
//         name: 'php',
//         coin:150
//     },
//     {
//         isFinish: false,
//         name: 'javascript',
//         coin:200
//     },
//     {
//         isFinish: false,
//         name: 'javascript',
//         coin:100
//     }
// ]

// Array.prototype.some2 = function(callback) {
//     for(let index in this) {
//         if(this.hasOwnProperty(index)) {
//             if(callback(this[index], index, this)) {
//                 return true;
//             }
//         }
//     }
//     return false

// }



// let result = courses.some2(function(course, index, array) {
//     return course.isFinish === true ;
// })


// console.log(result)



//||** tự viết every**||

// let courses = [
//     {
//         isFinish: false,
//         name: 'html',
//         coin:50
//     },
//     {
//         isFinish: false,
//         name: 'css',
//         coin:50
//     },
//     {
//         isFinish: false,
//         name: 'php',
//         coin:150
//     },
//     {
//         isFinish: false,
//         name: 'javascript',
//         coin:200
//     },
//     {
//         isFinish: true,
//         name: 'javascript',
//         coin:100
//     }
// ]

// Array.prototype.some2 = function(callback) {
//     for(let index in this) {
//         if(this.hasOwnProperty(index)) {
//             if(!callback(this[index], index, this)) {
//                 return false;
//             }
//         }
//     }
//     return true

// }



// let result = courses.some2(function(course, index, array) {
//     return course.isFinish === false ;
// })


// console.log(result)


// function giaThua(number) {
//     if(number > 1) {
//         return number * giaThua(number-1)
//     }
//     return 1
// }

// console.log(giaThua(6))

// HTML DOM

/**
 * 1. element  (các thẻ)  ID, class, tag, Css selector , HTML collection
 * 2. attribute  
 * 3. text
 */


// getElementById               trả trực tiếp element
// getElementsByClassName
// getElementsByTagName
// querySelector                trả trực tiếp element
// querySelectorAll

// HTML collection

// document.write


// let heading = document.querySelector('.heading')    // lấy id thì # class thì .

// console.log(heading);


//element 
// attribute: thuộc tính nằm trong element
// text


//DOM attribute   thêm attribute vào element ( nhớ pahri là attribute hợp lệ với thẻ )

// let headingElement = document.querySelector('h1')

// headingElement.setAttribute('hong', 'heading')


//innerText vaf textContent 


// let headingElement = document.querySelector('.heading');

// headingElement.innerText = '<i>hello</i>'

// console.log(headingElement.innerText)   // trả lại giống những gì mình nhìn thấy 
// console.log(headingElement.textContent)  // trả lại những gì trong các thẻ HTML có 


//thêm 1 element vào trong 1 element có sẵn
// innerHTML và outerHTML

// let boxElement = document.querySelector('.box')

// boxElement.innerHTML = '<h1 className="helo">xin chao</h1>'   // lấy những gì bên trong nó 


// boxElement.outerHTML  // lấy luôn cả chính nó


// node properties



//DOM style trong Element node

let boxElement = document.querySelector('.box')

// boxElement.style.backgroundColor = 'red'

Object.assign(boxElement.style, {
    with: '200px',
    height: '100px',
    backgroundColor: 'red',
});

