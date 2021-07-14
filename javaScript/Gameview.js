export default class Gameview{

    constructor(){
        console.log("init game")
    }

    updateBoard(game){
        console.log("this is a board within Gameview")
        console.log(game.board);
        for(let i = 0 ; i < game.board.length ; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.textContent = game.board[i];
            console.log(tile);
        }
    }

}