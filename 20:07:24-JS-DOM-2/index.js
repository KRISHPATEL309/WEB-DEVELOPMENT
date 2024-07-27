
let content = document.querySelector('h1');

function eventListener() {
    // console.log('I clicked on doctuments')
    content.style.backgroundColor='black'
    content.style.color='white'
    console.log('kya hal')
}

content.addEventListener('click', eventListener,false)

// // content.removeEventListener('click', eventListener)

// let info = document.querySelector('#wrapper')
// info.addEventListener('click', function(e){
//     console.log(e);
// })

// let links = document.querySelectorAll('a')

// console.log(links)

// links.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('maza aya bhaii');
// });

// let mydiv = document.createElement('div')

// function Parafun(event) {
//     console.log('Para' + event.target.textContent)
// }
// mydiv .addEventListener('click', Parafun)
// for (let i = 0; i <=100; i++) {
//     let newElement = document.createElement('p')
//     newElement.textContent = 'This is Para' + i;
//     mydiv.appendChild(newElement)
// }
// document.body.appendChild(mydiv)

let element = document.querySelector('#artical')

element.addEventListener('click', function(e){
    if(e.target.nodeName === 'SPAN'){
        console.log('span clicked')
    }
}) 