const gameInfo = document.querySelector('.game-info')
const boxes = document.querySelectorAll('.box')
const newGameBtn = document.querySelector('.btn')

let currentPlayer
let gameGrid

const winingPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//let's create a function to initalize the game
function initialize() {
    // Set Current Player to X 
    currentPlayer = 'X';
    gameInfo.innerText = `Current Player - ${currentPlayer}`;

    // Empty Kar Do Boxes 
    gameGrid = ["", "", "", "", "", "", "", "", ""]

    //ui per empty
    boxes.forEach((box,index) =>{
        box.textContent = ""
        box.style.pointerEvents = "all"
        box.classList = `box box${index+1}`
    })


    // Remove Active Class From Button
    newGameBtn.classList.remove("active");
}

initialize();

function handleClick(index){
    if (gameGrid[index] === ""){
        boxes[index].style.pointerEvents = "none"
        boxes[index].innerText = currentPlayer;
        gameGrid[index] =currentPlayer
        swapTurn()
        
        checkGameOver()
    }
}

function checkGameOver(){
    let winner = ""
    winingPosition.forEach((position) =>{
        if( (gameGrid[position[0]] !== "" ||gameGrid[position[2]] !== ""  || gameGrid[position[2] !== ""])
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){
    
                //check if winner is X
                if(gameGrid[position[0]] ==='X'){
                    winner='X';
                }
                else{
                    winner='O';
                }

                //disable pointer
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                });

                //now we know winner
                boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            }
    })

    if (winner != "") {
        gameInfo.innerText = `Winner is - ${winner}`
        newGameBtn.classList.add('active')
        return
    }


    let fillCount = 0
    gameGrid.forEach((box) =>{
        if(box != ""){
            fillCount++;
        }
    })
    if(fillCount === 9){
        gameInfo.innerText = "Game Tied !"
        newGameBtn.classList.add('active')
    }

}

function swapTurn(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O'
    }
    else{
        currentPlayer = 'X'
    }
    
    // UI upadate 
    gameInfo.innerText = `Current Player - ${currentPlayer}`
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});

newGameBtn.addEventListener('click', initialize)