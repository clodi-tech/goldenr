import { useState } from 'react';
import { Slider } from '@nextui-org/slider';

function Box({ gridColumn, gridRow, span, size }) {
    return (
        <div className="border-1 border-gray-500"
            style={{
                gridColumn: `${gridColumn} / span ${span}`,
                gridRow: `${gridRow} / span ${span}`,
                width: `${span * size}px`,
                height: `${span * size}px`
            }}
        />
    );
}

export default function Rect() {
    const [size, setSize] = useState(20);

    const boxes = [
        { gridColumn: 1, gridRow: 1, span: 21 },
        { gridColumn: 22, gridRow: 1, span: 13 },
        { gridColumn: 22, gridRow: 14, span: 3 },
        { gridColumn: 25, gridRow: 14, span: 2 },
        { gridColumn: 25, gridRow: 16, span: 1 },
        { gridColumn: 26, gridRow: 16, span: 1 },
        { gridColumn: 22, gridRow: 17, span: 5 },
        { gridColumn: 27, gridRow: 14, span: 8 },
    ];

    return (
        <main>
            <div className="grid grid-cols-34 grid-rows-21">
                {boxes.map((box, index) => (
                    <Box key={index} {...box} size={size} />
                ))}
            </div>
            <Slider aria-label="Volume" size="lg"
                className='w-[15rem]'
                value={size} onChange={setSize}
                minValue={10} maxValue={30} />
        </main>
    );
}
