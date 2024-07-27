// setTimeout(function(){
//     console.log('third')
// },3000)

// function sync(){
//     console.log('first')
// }
// sync()
// console.log('second')


// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('i am inside promise 1')

//     },5000)
//     // resolve(1998)
//     reject(new Error('Error aya he'))
// })

// promise1.then((value) => {console.log(value)})

// promise1.catch((error) => {console.log('Recieved an error')})

// // let promise2 = new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         console.log('i am inside promise 2')

// //     },3000)
// //     // resolve(1998)
// //     // reject(new Error('Error aya he'))
// // })

// console.log('pahela')

// -------------------------------

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Timeout1");
//     },2000)
//     resolve(true);
// });

// p1.then(() => {
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Timeout2");
//         },3000)
//         resolve("Promise2 Resolved Success");
//     });
//     return p2;
// }).then((value) => console.log(value));

// ---------------------------------------

// async function abcd() {
//     return 'kya hua';
// }
// console.log(abcd())

// ---------------------------------------

// async function utility(){
//     let dweather = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve('delhi me bahot garmi he');
//         },1000)
//     })
    
//     let hweather = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve('hyderabad me bahot garmi he');
//         },1000)
//     })
//     let delhiM = dweather;
//     let HM = await hweather;
    
//     return [delhiM,HM]
// }
// console.log(utility())

// ---------------------------------------

// let obj = {
//     heading:'head'
// }

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let output = await content.json()
//     console.log(output)
// }
// utility()

// async function helper(){
//     let options ={
//         method : "POST",
//         body : JSON.stringify({
//             title : "foo",
//             body : "bar",
//             userId : 1,
//         }),
//         header : {
//             "Content-Type": "application/json; charset=utf-8",
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans = await helper;
//     console.log(ans);
// }

// utility();

// --------------------

function outer() {
    const name = "Krish"; 
    function inner() {
      console.log(`Hello, ${name}!`);
    }
    return inner;
  }
  
  const greeting = outer();
  greeting(); // logs "Hello, John!"



  
