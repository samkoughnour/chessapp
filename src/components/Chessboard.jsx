import React from 'react'

function Chessboard({colorScheme: {lightsquare, darksquare}, boardState: {pieceOrder, activeColor, castling, enPassantSquares}}) {
    const boardArray = new Array(64).fill(0)



	return (
		<div style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(8, 75px)',
			gridTemplateRows: 'repeat(8, 75px)'
		}}>
			{boardArray.map((square, index) => {
				return <div key={index} style={{
					background: (Math.floor(index / 8) % 2)  === 0 ? (index % 2 === 0 ? darksquare : lightsquare) : (index % 2 === 0 ? lightsquare : darksquare),
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>

					{pieceOrder[index] !== "e" ? 
						<img src={require('../images/chesspieces/'+ pieceOrder[index] +'.png')} alt='' style={{
							objectFit: 'contain'
						}}/>
					 
					 : null}
				</div>
			})}
		</div>
	)
}

export default Chessboard