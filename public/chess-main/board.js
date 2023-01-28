class ChessGame {
    constructor() {
        // Create an empty array to store the tiles
        this.tiles = [];
        this.turn = "white";
        this.selectedId = undefined;
        this.white_color = "white";
        this.black_color = "#b8ed18";
        
       
        
      
        // Create a container element to hold the chess board
        let container = document.createElement("div");
      
        // Create the chess board HTML
        let html = "";
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            let color = (i + j) % 2 == 0 ? "rgb(153,98,20)" : "rgb(26,17,5)";
            let button = `<button style="background-color: ${color}; width: 50px; height: 50px" id =${(8*i) +j} onclick ="game.select(this.id)" ></button>`;
            html += button;
            this.tiles.push({id: (8*i)+j,
              color: undefined,
              piece: undefined,
              gridLocation: {x:j,y:j},
            });
          }
          html += "<br>";
        }
      
        // Add the chess board HTML to the container element
        container.innerHTML = html;
      
        // Add the container element to the page
        document.body.appendChild(container);
      
        // Draw the pieces on the board
      this.initilizeBoard();
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
      if (piece !== "") {
       let tile = document.getElementById(`${(i*8)+j}`);
        tile.style.color = pieces[piece].color;
        tile.innerHTML = pieces[piece].symbol;
        this.tiles[(i*8)+j].color = pieces[piece].color;
        this.tiles[(i*8)+j].piece = pieces[piece].symbol;
  
      }
    }
  }

  }



   select(id) {
    let tile = 
    {button:document.getElementById(id),
      gridLocation: {x:(id%8),y: (id-(id%8))/8},
      id: id,
      color: this.tiles[id].color,
      piece: this.tiles[id].piece,
      
    };
    this.tiles[id] =tile;


    console.log(this.tiles[id]);
      selectPiece(tile);
    
  }

   
  }
  





  let game = new ChessGame();
  
  