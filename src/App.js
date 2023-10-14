import './App.css';
import Chessboard from '../src/components/Chessboard.jsx'
import { useState } from 'react';
import FENTranslator from './utils/FENtranslator';

function App() {
  const [boardState, setBoardState] = useState(FENTranslator("rnbqkbnr/pppppppp/8/3PR3/3RB3/1Q6/PP2PP1P/RNB1KB1R b KQkq - 0 1"))

  return (
    <div className="App">
      <Chessboard colorScheme={{lightsquare: "#eeeed2", darksquare: "#769656"}} boardState={boardState}></Chessboard>
    </div>
  );
}

export default App;
