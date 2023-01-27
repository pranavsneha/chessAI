const { Chess } = require('chess.js')
const chess = new Chess()
let i = 0;
while (i < 10) {
   
   i++;
    const moves = chess.moves()
    const move = moves[Math.floor(Math.random() * moves.length)]
    chess.move(move)

   console.log( chess.ascii())

}

console.log(chess.pgn())