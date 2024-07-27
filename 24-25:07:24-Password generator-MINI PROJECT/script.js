const inputSlider = document.querySelector("[data-Lengthslider]")
const lengthDisplay = document.querySelector("[data-lengthNumber]")
const passwordDisplay = document.querySelector("[data-passwordDisplay]")
const copybtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const numberCheck = document.querySelector("#numberletter")
const symbolCheck = document.querySelector("#symbols")
const indicator = document.querySelector("[data-indicator]")
const generatebtn = document.querySelector(".generate-btn")
const allcheckbox = document.querySelectorAll("input[type=checkbox]")
const symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/'


let password = "";
let passwordLength = 10;
let checkCount = 0;
setIndicator("#ccc")

handleSlider()
//set strength color grey


//set password length
function handleSlider() {
    inputSlider.value=passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}

function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max-min))+min
}

function generateRandomNum() {
    return getRndInteger(0,9)
}

function generateLowercase(){
    return String.fromCharCode(getRndInteger(97,123))
}

function generateUppercase(){
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol(){
    const randNum = getRndInteger(0,symbol.length)
    return symbol.charAt(randNum)
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (uppercase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbers.checked) hasNumber = true;
    if (symbols.checked) hasSymbol = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied"
    }
    catch (e) {
        // alert("Something went wrong in CopyContent");
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add('active');

    setTimeout(() => {
        copyMsg.classList.remove('active');
    }, 2000)
}

function shufflepassword(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j]; 
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
function handleCheckboxChange(){
    checkCount = 0;
    allcheckbox.forEach( (checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    })

    //special condition
    if(passwordLength <checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allcheckbox.forEach( (checkbox)=>{
    checkbox.addEventListener('change', handleCheckboxChange)
})

inputSlider.addEventListener('input',(e)=>{
    passwordLength = e.target.value
    handleSlider()
})

copybtn.addEventListener('click', ()=>{
    if(passwordDisplay.value)
        copyContent();
})

generatebtn.addEventListener('click', ()=>{
    //none of the checkbox checked
    if(checkCount==0) 
        return;

    if(passwordLength <checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start to find new password 

    //remove old password
    password="";

    // if(uppercaseCheck.checked){
    //     password += generateUppercase();
    // }
    // if(lowercaseCheck.checked){
    //     password += generateLowercase();
    // }
    // if(symbolCheck.checked){
    //     password += generateSymbol();
    // }
    // if(numberCheck.checked){
    //     password += generateRandomNum();
    // }

    let funArr = [];
    if(uppercaseCheck.checked){
        funArr.push(generateUppercase)
    }

    if(lowercaseCheck.checked){
        funArr.push(generateLowercase)
    }

    if(numberCheck.checked){
        funArr.push(generateRandomNum)
    }

    if(symbolCheck.checked){
        funArr.push(generateSymbol)
    }

    //compulsary
    for(let i=0; i<funArr.length;i++){
        password +=funArr[i]();
    }
    //remaining
    for(let i=0; i<passwordLength-funArr.length;i++){
        let randIndex = getRndInteger(0, funArr.length)
        password+=funArr[randIndex]();  
    }

    //shuffle password
    password = shufflepassword(Array.from(password))

    passwordDisplay.value=password
    //calc strength
    calcStrength();

})