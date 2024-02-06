import { useState } from 'react'
import './App.css'

function App() {
  const [fontSize, setFontSize] = useState(10);
  const goldenRatio = 1.61803399;

  const handleInputChange = (event) => {
    setFontSize(event.target.value);
  }

  const calculateGoldenRatio = (multiplier) => {
    return fontSize * Math.pow(goldenRatio, multiplier);
  }

  return (
    <>
      <main>
        <h1 style={{ fontSize: `${calculateGoldenRatio(3)}px` }}>
          {`<h1> ${calculateGoldenRatio(3).toFixed(2)}px`}
        </h1>
        <h2 style={{ fontSize: `${calculateGoldenRatio(2)}px` }}>
          {`<h2> ${calculateGoldenRatio(2).toFixed(2)}px`}
        </h2>
        <h3 style={{ fontSize: `${calculateGoldenRatio(1)}px` }}>
          {`<h3> ${calculateGoldenRatio(1).toFixed(2)}px`}
        </h3>
        <h4 style={{ fontSize: `${fontSize}px` }}>
          {`<h4> ${fontSize}px`}
        </h4>
        <p style={{ fontSize: `${fontSize}px` }}>
        {`<p> ${fontSize}px`}
        </p>
        <input
          type='range'
          min='5'
          max='20'
          value={fontSize}
          onChange={handleInputChange}
        />
      </main>
      <footer>a project by <a href="https://sonolibero.io" target='_blank'>libero</a></footer>
    </>
  )
}

export default App
