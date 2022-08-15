const board = document.getElementById("board");




//Object for gameboard using module because only 1
const gameBoard = ( () => {
    let boardArray = [0, 0, 0, 0, 0, 0];

    function _updateArray(cell){

    }

    function _updateCell(cell) {

        if(gameController.getPlayer() === 1)
            cell.innerHTML = 'x';
        else
            cell.innerHTML = 'o';


        gameController.switchPlayer();
    };


    const generateBoard = () => {
        let boardTable = document.createElement('table');
        let boardBody = document.createElement('tbody');



        for(let i = 0; i < 3; i++){
            let tableRow = document.createElement('tr');
            let cell1 = document.createElement('td');
            let cell2 = document.createElement('td');
            let cell3 = document.createElement('td');

            cell1.addEventListener('click', function (){
                _updateCell(cell1);
            })

            cell2.addEventListener('click', function (){
                _updateCell(cell2);
            })

            cell3.addEventListener('click', function (){
                _updateCell(cell3);
            })

            tableRow.appendChild(cell1);
            tableRow.appendChild(cell2);
            tableRow.appendChild(cell3);

            boardBody.appendChild(tableRow);
        }

        boardTable.appendChild(boardBody);
        board.appendChild(boardTable);

    }

    return {generateBoard};
})();



//Object for controlling the game
const gameController = ( () =>{
    
    let currentPlayer = 1;

    function switchPlayer() {
        if (currentPlayer === 1)
            currentPlayer = 2;
        else
            currentPlayer = 1;
    }

    function getPlayer() {
        return currentPlayer;
    }


    return {
        switchPlayer,
        getPlayer
    }


})();

//Module for controlling screen, not board related
const displayController = ( () => {
    
})

//Object for player using factory because multiple
const playerFactory = (name) => {
    let points = 0;

    const getPoints = () => points;
    const getName = () => name;
    const incrementPoints = () => {
        points++;
    };

    return {getPoints, getName, incrementPoints};
};

gameBoard.generateBoard();