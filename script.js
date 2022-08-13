const board = document.getElementById("board");




//Object for gameboard using module because only 1
const gameBoard = ( () => {
    let boardArray = [0, 0, 0, 0, 0, 0];


    const generateBoard = () => {
        let boardTable = document.createElement('table');
        let boardBody = document.createElement('tbody');

        for(let i = 0; i < 3; i++){
            let tableRow = document.createElement('tr');
            let cell1 = document.createElement('td');
        }

        boardTable.appendChild(boardBody);
        board.appendChild(boardTable);

    }

    return {generateBoard};
})();

//Object for displaying things using module because only 1

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
