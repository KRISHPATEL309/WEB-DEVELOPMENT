console.log('kese ho...')

function run() {
    console.log('running')
}

run();

//function assignment
let stand = function walk() {
    console.log('walking')
}

stand();
// walk()==>not define 

let jump = stand
jump()

//anonymous function assignment
let stand2 = function() {
    console.log('anonymous function assignment')
}
stand2()

// function sum(a,b){
//     console.log(arguments)
//     return a+b;
// }
console.log(sum(2,3))

//arguments
sum(1,2,3,4,5,6)

function sum(a,b){
    let total = 0;
    for(let value of arguments)
        total=total+value;
    return total;
}
let ans=sum(1,2,3,4,5,6)
console.log(ans)


//rest operator ==> ae last ma j avse
function abc(num,value,...args) {
    console.log(args)
}

abc(1,2,3,4,5,6)

// default parameter

function interest(p,r=5,y=10){
    return p*r*y/100;
}

console.log(interest(1000,undefined,8))


//getter setter

//getter-> access properties
//setter-> change or  mutate properties
let person = {
    fName : 'krish',
    lName : 'Patel'
}

console.log(person)

function fullname(){
    return `${person.fName} ${person.lName}`
}
// this function read only
console.log(fullname())

//get

let person1 = {
    fName : 'krish',
    lName : 'Patel',
    get fullname(){
        return `${person1.fName} ${person1.lName}`
    },
    set fullname(value){
        if (typeof value !== String) {
            throw new Error("You have nor sent a string");
        }

        let parts = value.split(' ');
        this.fName = parts[0]
        this.lName = parts[1]

    }
}

// console.log(person1.fullname)

// try{
//     person1.fullname='Jay Patel';
// }
// catch(e){
//     // alert(e)
// }
person1.fullname='Jay Patel';
console.log(person1.fullname)