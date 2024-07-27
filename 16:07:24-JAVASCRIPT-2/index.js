console.log('hello jee kese ho..');

// object create

// const rectangle = {
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('draw...');
//     }
// };

//fectory function 
function createRectangle(len,bre){
    const rectangle = {
        length: len,
        breadth: bre,
    
        draw: function(){
            console.log('draw...');
        }
    };
    return rectangle;
}

// rectangle.length;
// rectangle.breadth;
// rectangle.draw();

let rectangleObj1 = createRectangle(3,4);
let rectangleObj2 = createRectangle(7,8);
let rectangleObj3 = createRectangle(2,1);

//constructor function
function Rectangle(len,bre) {
    this.length=len;
    this.breadth=bre;
    this.draw =function(){
        console.log('draw...')
    }
}
//object creation using constructor function
let rectangleObject = new Rectangle(3,6);

//Dynamic nature of object
//isme ham function me kuch bhi add or delete kar sakte he

rectangleObject.color='yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

//object is constructor and function is an object

let objabc = new Function(
    'len', 'bre',
    `this.length=len;
    this.breadth=bre;
    this.draw =function(){
        console.log('draw...')
    }`
);
let rect = new objabc(6,7);
console.log(rect);

let a=10;
let b=a;

a++;

console.log(a);
console.log(b);

let c={value:10};
let d=c;

c.value++;

console.log(c.value);
console.log(d.value);

//premitive are copied by their value
//reference are copied by their address
let e =10;

function inc(e) {
    e++;
}

inc(e);
console.log(e);

let f ={value:10};

function inc(f) {
    f.value++;
}

inc(f);
console.log(f);

//for-in loop
let rec = {
    length:2,
    width:5,
}

for (const key in rec) {

    //keys are reflacted through key variable
    //values are reflacted through rec[key]
    console.log(key,rec[key])
}

for (const iterator of Object.entries(rec)) {
    console.log(iterator);
}

if ('color' in rec) {
    console.log('present')
}
else{
    console.log('absent')
}

//Object clone #1-------------------------

let src ={
    x:10,
    y:20,
    z:30,
};

// let dest ={};

// for (const key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

//Object clone #2-------------------------
 
// let src2={value:25}
// let dest = Object.assign({},src,src2)
// console.log(dest);

// src.x++;
// console.log(dest);


//Object clone #3-------------------------

let dest={...src}
console.log(dest);
src.x++;
console.log(dest);

