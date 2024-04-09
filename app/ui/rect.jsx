import { useState } from 'react';
import { Slider } from '@nextui-org/slider';

function SvgBox({ x, y, span, size }) {
    return (
        <rect x={x} y={y} width={span * size} height={span * size} stroke="gray" fill="none" strokeWidth="1" />
    );
}

export default function RectSvg() {
    const [size, setSize] = useState(20);

    const boxes = [
        { x: 0, y: 0, span: 21 }, // Adjust x, y to position each box
        { x: 21 * size, y: 0, span: 13 },
        { x: 21 * size, y: 13 * size, span: 3 },
        { x: 24 * size, y: 13 * size, span: 2 },
        { x: 24 * size, y: 15 * size, span: 1 },
        { x: 25 * size, y: 15 * size, span: 1 },
        { x: 21 * size, y: 16 * size, span: 5 },
        { x: 26 * size, y: 13 * size, span: 8 },
    ];

    return (
        <main>
            <svg width={size * 34} height={size * 21}>
                {boxes.map((box, index) => (
                    <SvgBox key={index} {...box} size={size} />
                ))}
            </svg>
            <Slider aria-label="Volume" size="lg"
                className='w-[15rem]'
                value={size} onChange={setSize}
                minValue={10} maxValue={30} />
        </main>
    );
}
