import { useState } from 'react'
import './App.css'

function App() {
  const [fontSize, setFontSize] = useState(10);
  const goldenRatio = 1.61803399;

  const handleInputChange = (event) => {
    setFontSize(event.target.value);
  }

  const calculateGoldenRatio = () => {
    return fontSize * goldenRatio;
  }

  return (
    <>
      <header>a project by libero</header>
      <main>
        <input
          className='input'
          type='range'
          min='5'
          max='20'
          value={fontSize}
          onChange={handleInputChange}
        />
        <p className='result' style={{ fontSize: `${fontSize}px` }}>p : {fontSize}px</p>
        <h4 className='golden-ratio' style={{ fontSize: `${calculateGoldenRatio()}px` }}>
          h4 : {calculateGoldenRatio().toFixed(2)}px
        </h4>
      </main>
    </>
  )
}

export default App
