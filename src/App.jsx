import { useState } from 'react'
import './App.css'

function App() {
  const [fontSize, setFontSize] = useState('0px');
  const goldenRatio = 1.618;

  const handleInputChange = (event) => {
    setFontSize(`${event.target.value}px`);
  }

  const calculateGoldenRatio = () => {
    if (!isNaN(fontSize.replace('px', ''))) {
      return `${fontSize.replace('px', '') * goldenRatio}px`;
    }
    return 'medium';
  };

  return (
    <>
      <header>a project by libero</header>
      <main>
        <input
          className='input'
          type='number'
          placeholder='enter here the font size in px'
          autoFocus
          onChange={handleInputChange}
        />
        <p className='result' style={{ fontSize: fontSize }}>p : {fontSize}</p>
        <h4 className='golden-ratio' style={{ fontSize: calculateGoldenRatio() }}>
          h4 : {calculateGoldenRatio()}
        </h4>
      </main>
    </>
  )
}

export default App
