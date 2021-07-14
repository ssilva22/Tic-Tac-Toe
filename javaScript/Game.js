export default class Game{

    constructor() {
        this.turn="X";
        this.board= new Array(9).fill(null);
    }

    nexTurn(){
        if(this.turn === "X"){
            this.turn = "O"
        }else{
            this.turn = "X"
        }
    }

    makeMove(i) {

        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn;
    }

}