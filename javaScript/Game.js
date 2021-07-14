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

        if(this.endGame()){
            return;
        }

        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn;
        let winningCombo= this.findWinner();
        if(!winningCombo){
            this.nexTurn();
        }
      
    }

    findWinner() {
        const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ];

        for(const combination of winner){
            const [a,b,c] = combination;

            if(this.board[a] &&
            (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                return combination;
            }
        }
        return null;
    }

    endGame(){
        let winningCombination=this.findWinner();
        if(winningCombination){
            return true;
        }
        else{
            return false;
        }
    }
}