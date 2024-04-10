'use client'

import { useState } from 'react'
import { Slider } from '@nextui-org/slider'
import { JetBrains_Mono } from 'next/font/google';

const mono = JetBrains_Mono({ 
    subsets: ["latin"],
    weight: ['200']
});

const fixed = 20;

function Heading({ tag, multiplier, fontSize }) {
  const goldenRatio = 1.61803399;
  const Tag = tag;
  const size = fontSize * Math.pow(goldenRatio, multiplier);
  const displaySize = fixed * Math.pow(goldenRatio, multiplier);

  return (
    <Tag className={mono.className} style={{ fontSize: `${displaySize}px`, lineHeight: `${displaySize}px` }}>
      {`<${tag}> ${size.toFixed(1)}`}
    </Tag>
  );
}

function Typo() {
  const [fontSize, setFontSize] = useState(15);

  return (
    <main>
        {['h1', 'h2', 'p', 'small'].map((tag, index) => (
          <Heading
            key={tag}
            tag={tag}
            multiplier={2 - index}
            fontSize={fontSize}
          />
        ))}
        <Slider aria-label="Volume" size="lg"
          className='w-[15rem]'
          value={fontSize} onChange={setFontSize}
          minValue={5} maxValue={30}/>
        <p>in pixels</p>
    </main>
  )
}

export default Typo