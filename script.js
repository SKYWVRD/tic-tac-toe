//Object for gameboard using module because only 1



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