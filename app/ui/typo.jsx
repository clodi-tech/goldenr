'use client'

import { useState } from 'react'
import { Slider } from '@nextui-org/slider'
import { Roboto_Mono } from 'next/font/google';

const mono = Roboto_Mono({ 
    subsets: ["latin"],
    weight: ['300']
});

function Heading({ tag, multiplier, fontSize }) {
  const goldenRatio = 1.61803399;
  const Tag = tag;
  const size = fontSize * Math.pow(goldenRatio, multiplier);

  return (
    <Tag className={mono.className} style={{ fontSize: `${size}px`, lineHeight: `${size}px` }}>
      {`<${tag}> ${size.toFixed(2)}px`}
    </Tag>
  );
}

function Typo() {
  const [fontSize, setFontSize] = useState(15);

  return (
    <main>
        {['h1', 'h2', 'h3'].map((tag, index) => (
          <Heading
            key={tag}
            tag={tag}
            multiplier={3 - index}
            fontSize={fontSize}
          />
        ))}
        <p style={{ fontSize: `${fontSize}px` }}>
        {`<p> ${fontSize}px`}</p>
        <Slider aria-label="Volume" size="lg"
          className='w-[15rem]'
          value={fontSize} onChange={setFontSize}
          minValue={5} maxValue={30}/>
    </main>
  )
}

export default Typo