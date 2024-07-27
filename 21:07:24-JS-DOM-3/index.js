//adding 100element

const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement('p')
    newElement.textContent = 'This is Para' + i;

    document.body.appendChild(newElement);
    
}
const t2 = performance.now();
console.log("This took " + (t2-t1) + " ms")

//optimizing a bit

const t3 = performance.now();

let mydiv = document.createElement('div')
for (let i = 1; i <= 100; i++) {
    let element = document.createElement('p')
    element.textContent = 'This is Para' + i;

    mydiv.appendChild(element);
}
document.body.appendChild(mydiv) // 1reflow and 1repaint

const t4 = performance.now();
console.log("This took " + (t4-t3) + " ms")


function addPara(){
    let para = document.createElement('p')
    para.textContent = 'Js is Single'
    document.body.appendChild(para)
}

function addNewMessage(){
    let para = document.createElement('p')
    para.textContent = 'kya hal'
    document.body.appendChild(para)
}

addPara()
addNewMessage()
