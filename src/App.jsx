import { useState } from 'react'
import './App.css'

function Heading({ tag, multiplier, fontSize }) {
  const goldenRatio = 1.61803399;
  const Tag = tag;
  const size = fontSize * Math.pow(goldenRatio, multiplier);

  return (
    <Tag style={{ fontSize: `${size}px` }}>
      {`<${tag}> ${size.toFixed(2)}px`}
    </Tag>
  );
}

function App() {
  const [fontSize, setFontSize] = useState(10);

  return (
    <>
      <main>
        {['h1', 'h2', 'h3'].map((tag, index) => (
          <Heading
            key={tag}
            tag={tag}
            multiplier={3 - index}
            fontSize={fontSize}
          />
        ))}
        <h4 style={{ fontSize: `${fontSize}px` }}>
          {`<h4> ${fontSize}px`}</h4>
        <p style={{ fontSize: `${fontSize}px` }}>
        {`<p> ${fontSize}px`}</p>
        <input
          type='range'
          min='5'
          max='20'
          value={fontSize}
          onChange={(event) => setFontSize(event.target.value)}/>
      </main>
      <footer>a project by <a href="https://sonolibero.io" target='_blank'>libero</a></footer>
    </>
  )
}

export default App