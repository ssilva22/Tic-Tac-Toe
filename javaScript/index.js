import Game from "./Game.js";
import Gameview from "./Gameview.js"

let game= new Game();
let gameView = new Gameview();
let tiles= document.querySelectorAll(".board-tile");

document.querySelector(".restart").addEventListener("click",
() => {
    RestartGame();
})




tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        OnTileClick(tile.dataset.index);
    })
})


function OnTileClick(i){
    game.makeMove(i);
    gameView.updateBoard(game);
}

function RestartGame(){
    game = new Game();
    gameView.updateBoard(game);
}