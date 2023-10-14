//Takes a FEN notation string and returns an array of strings corrresponding to the chess position described by the FEN
const FENTranslator = (fen) =>{
    const boardState = {
        pieceOrder: []
    }
    var newfen = fen.split('/')
    var lastline = newfen[7]
    newfen.pop()
    newfen = [...newfen, ...lastline.split(' ')]
    for(var i = 0; i < 8; i++){
        var rank
        if(newfen[i].length > 1){
            rank = newfen[i].split('')
        } else {
            rank = newfen[i]
        }
        for(var j = 0; j < rank.length; j++){
            if(isNaN(rank[j])) {
                if(rank[j].toUpperCase() === rank[j]){
                   boardState.pieceOrder.push(rank[j].toLowerCase()) 
                } else {
                   boardState.pieceOrder.push('b' + rank[j]) 
                }
                
            } else{
                const emptySpaces = JSON.parse(rank[j])
                const emptySpace = new Array(emptySpaces).fill("e")
                boardState.pieceOrder = [...boardState.pieceOrder, ...emptySpace]
            }
        }
    }
    boardState.activeColor = newfen[8]
    boardState.castling = newfen[9]
    boardState.enPassantSquares = newfen[10]
    boardState.halfclockNumber = newfen[11]
    boardState.fullmoveNumber = newfen[12]
    console.log(boardState)
    return boardState
}
export default FENTranslator