import { useState } from 'react';
import { Slider } from '@nextui-org/slider';

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
    const [size, setSize] = useState(20);

    const boxes = [
        { x: 0 * size, y: 13 * size, span: 21, rotate: 0 },
        { x: 0  * size, y: 0  * size, span: 13, rotate: 90 },
        { x: 13 * size, y: 0  * size, span: 8, rotate: 180 },
        { x: 16 * size, y: 8  * size, span: 5, rotate: -90 },
        { x: 13 * size, y: 10 * size, span: 3, rotate: 0 },
        { x: 13 * size, y: 8  * size, span: 2, rotate: 90 },
        { x: 15 * size, y: 8  * size, span: 1, rotate: 180 },
        { x: 15 * size, y: 9  * size, span: 1, rotate: -90 },
    ];

    return (
        <main>
            <svg width={size * 21} height={size * 34} overflow='visible'>
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
