import './App.css';
import Weather from './Weather'
import EmotionButton from './EmotionButton'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState()

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Weather setColor={setColor} />
    </div>
  );
}

export default App;
