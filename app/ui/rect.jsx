import { useState } from 'react';
import { Slider } from '@nextui-org/slider';
import Image from 'next/image';

const fixed = 18;
const gr = 1.61803399;

function SvgBox({ x, y, span, size, rotate }) {
    const pathD = `M ${x} ${y} A ${span * size} ${span * size} 0 0 0 ${x + span * size} ${y + span * size}`;

    const centerX = x + (span * size) / 2;
    const centerY = y + (span * size) / 2;

    return (
        <g transform={`rotate(${rotate}, ${centerX}, ${centerY})`}>
            <rect x={x} y={y} width={span * size} height={span * size} stroke="gray" fill="none" strokeWidth="1" />
            <path d={pathD} stroke="white" fill="none" strokeWidth="2" />
        </g>
    );
}

export default function RectSvg() {
    const [size, setSize] = useState(1024);

    const boxes = [
        { x: 0  * fixed, y: 13 * fixed, span: 21, rotate: 0 },
        { x: 0  * fixed, y: 0  * fixed, span: 13, rotate: 90 },
        { x: 13 * fixed, y: 0  * fixed, span: 8 , rotate: 180 },
        { x: 16 * fixed, y: 8  * fixed, span: 5 , rotate: -90 },
        { x: 13 * fixed, y: 10 * fixed, span: 3 , rotate: 0 },
        { x: 13 * fixed, y: 8  * fixed, span: 2 , rotate: 90 },
        { x: 15 * fixed, y: 8  * fixed, span: 1 , rotate: 180 },
        { x: 15 * fixed, y: 9  * fixed, span: 1 , rotate: -90 },
    ];

    return (
        <main>
            <Image src="/formula.svg" alt='formula' width={142} height={50} />
            <div className='flex gap-4'>
                <p>a: {size}</p>
                <p>b: {(size / gr).toFixed(5)}</p>
            </div>
            <Slider aria-label="Volume" size="lg"
                className='w-[15rem]'
                value={size} onChange={setSize}
                minValue={1} maxValue={3000} />
            <svg width={fixed * 21} height={fixed * 34} overflow='visible'>
                {boxes.map((box, index) => (
                    <SvgBox key={index} {...box} size={fixed} />
                ))}
            </svg>
        </main>
    );
}
