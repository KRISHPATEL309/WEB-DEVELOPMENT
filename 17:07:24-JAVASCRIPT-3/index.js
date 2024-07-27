console.log('hello jee');

let lastName = 'krish';

let firstName = new String('Patel'); //string ne object banava mate

let message = 'this is my first message';
let words = message.split(' ');
console.log(words);

let messag1 = `this 
is my 

first 

message

hello ${lastName}`;
console.log(messag1);

// Date

let date = new Date();
console.log(date);


//array
let numbers = [1,2,4,5,6]
console.log(numbers[0])

// insert new element in array 
//end of array
 numbers.push(9)
 console.log(numbers)

//begining
numbers.unshift(5)
 console.log(numbers)

 // middle 
 numbers.splice(3,0,'a','b','c')
 console.log(numbers)


//searching
console.log(numbers.indexOf(10))

//we want to check if a number exist in a array
console.log(numbers.includes(10))


let numbers2 = [1,2,4,5,6]
console.log(numbers2.indexOf(4,3))
 
let courses = [
    {no:1, naam:'KRISH'},
    {no:2, naam:'Jay'}
];

console.log(courses);

//call back function
// let course=courses.find(function(course) {
//     return course.naam==='Jay'
// })

let course=courses.find(course=>
    course.naam==='Jay'
)
console.log(course);

//removing element

let number = [1,2,4,5,6]

//remove end element
console.log(number.pop())
console.log(number)

//remove first element
console.log(number.shift())
console.log(number)

//remove middle element
console.log(number.splice(1,1))
console.log(number)


//Empting an array
let num = [1,2,4,5,6]
let num2 = num

// 1
// num=[]

// 2
// num.length =0

// 3
num.splice(0,num.length)
console.log(num)
console.log(num2)

//combining

let first= [1,2,3]
let second= [4,5,6]

let third= first.concat(second)
console.log(third)

//sliced

marks=[10,20,30,40,50,60,70,80]
let third1= marks.slice(2,6)
console.log(third1)

//combined using spread operator
let f= [1,2]
let s= [4,5]

let combined = [...f,'a',...s,'b']
console.log(combined)

//copy mate
let another = [...combined]
console.log(another)

//iterating an array
let arr = [10,20,30,40,50]

for (const iterator of arr) {
    console.log(iterator)
}

arr.forEach(element => {
    console.log(element)
});

//joining array
let numb = [10,20,35,40]
const joined = numb.join(',')
console.log(joined)


//split
let mess = 'This is my first message'
let parts = mess.split(' ')
console.log(parts)

let join = parts.join('_')
console.log(join )

let n = [35,40,10,5,2,90,20]
n.sort();
console.log(n)

n.reverse();
console.log(n)

//filtering an array
let nu = [1,2,-1,-4]
let filtered=nu.filter(value=>{
    return value < 0;
})
console.log(filtered)

//mapping an array
let nume = [7,8,9,10]
let map = nume.map(function(value){
    return 'student_no: ' + value;
})
console.log(map)

//mapping with objects
let abc = [1,2,-1,-4]
let filter = abc.filter(value=> value>=0)
let items = filter.map(function(num){
    let obj = {value: num}
    return obj;
})
console.log(items)









