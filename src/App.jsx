import { useState } from 'react'
import './App.css'

function App() {
  const [fontSize, setFontSize] = useState('0px');

  const handleInputChange = (event) => {
    setFontSize(`${event.target.value}px`);
  }

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
        <div className='result' style={{ fontSize: fontSize }}>results</div>
      </main>
    </>
  )
}

export default App
