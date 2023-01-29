class ChessGame {
    constructor() {
   
        this.tiles = [];
        this.turn = "white";
        
        this.white_color = "white";
        this.black_color = "#b8ed18";
        this.chess = new Chess();
       this.selectedPiece = undefined;
        
      
    
       let container = document.createElement("div");
container.style.position = "relative";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let color = (i + j) % 2 == 0 ? "rgb(153,98,20)" : "rgb(26,17,5)";
    let button = document.createElement("button");
    button.style.backgroundColor = color;
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.position = "absolute";
    button.style.top = `${i * 50}px`;
    button.style.left = `${j * 50}px`;
    button.id = (8*i) + j;
    button.onclick = function() {game.select(this.id)};
    container.appendChild(button);
    this.tiles.push({id: (8*i)+j,
      color: undefined,
      piece: undefined,
      gridLocation: {x:j,y:j},
      SAN: this.setSAN(i,j),
    });
  }
}
document.body.appendChild(container);
      
      this.initilizeBoard();
      }
      
setSAN(i,j)
{
  let letters = ['a','b','c','d','e','f','g','h'];
  let numbers = ['8','7','6','5','4','3','2','1'];
  return letters[j].concat(numbers[i]);
  
}

initilizeBoard() {

    const pieces = {
      pawn: {symbol:"\u265F",color: this.white_color},
      rook: {symbol:"\u265C",color: this.white_color},
      knight: {symbol:"\u265E",color: this.white_color},
      bishop: {symbol:"\u265D",color: this.white_color},
      queen: {symbol:"\u265B",color: this.white_color},
      king: {symbol:"\u265A",color: this.white_color}, 
      b_pawn: {symbol:"\u265F",color: this.black_color},
      b_rook: {symbol:"\u265C",color: this.black_color},
      b_knight: {symbol:"\u265E",color: this.black_color},
      b_bishop: {symbol:"\u265D",color: this.black_color},
      b_queen: {symbol:"\u265B",color: this.black_color},
      b_king: {symbol:"\u265A",color: this.black_color},
    };
    let board = [    ["b_rook", "b_knight", "b_bishop", "b_queen", "b_king", "b_bishop", "b_knight", "b_rook"],
    ["b_pawn", "b_pawn", "b_pawn", "b_pawn", "b_pawn", "b_pawn", "b_pawn", "b_pawn"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
  ];

  // Draw the pieces on the board
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let piece = board[i][j];
      
       let tile = document.getElementById(`${(i*8)+j}`);
       if (piece !== "") {
        tile.style.color = pieces[piece].color;
        tile.innerHTML = pieces[piece].symbol;
        this.tiles[(i*8)+j].color = pieces[piece].color;
        this.tiles[(i*8)+j].piece = pieces[piece].symbol;
  
      }
    }
  }

  }



   select(id) {

    let tile = this.getTile(id);
    
    
   console.log(tile);
    
    if(this.selectedPiece == undefined && tile.piece !== undefined)
     {
      this.selectedPiece = tile;
     } else if(this.selectedPiece != undefined && this.selectedPiece.id !== tile.id) {

        let isValid = this.chess.move({ from: this.selectedPiece.SAN, to: tile.SAN });
        console.log(this.selectedPiece);
        this.move(this.selectedPiece, tile );
      //  console.log(this.chess.ascii());
          this.selectedPiece = undefined;
          

     }
    
   
     
    
  }

   
move(from,to)
{
  this.tiles[to.id].piece = from.piece;
  this.tiles[to.id].color = from.color;
  this.tiles[to.id].button.style.color = from.color;
  this.tiles[to.id].button.innerHTML = from.piece;

this.tiles[from.id].piece = undefined;
this.tiles[from.id].color = undefined;
this.tiles[from.id].button.style.color = undefined;
this.tiles[from.id].button.innerHTML = "";



}


  getTile(id){
   
    this.tiles[id].button = document.getElementById(id);
    return this.tiles[id];
     
  }
  }
  





  let game = new ChessGame();
  
  