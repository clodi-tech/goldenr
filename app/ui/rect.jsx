const size = 15;

export default function Rect() {
    return (
        <main>
            <div className="grid grid-cols-13 grid-rows-21">
                <div className="border-1 border-white" style={{ gridColumn: "1 / span 13", gridRow: "1 / span 13", width: `${13*size}px`, height: `${13*size}px` }}>13</div>
                <div className="border-1 border-white" style={{ gridColumn: "1 / span 3", gridRow: "14 / span 3", width: `${3*size}px`, height: `${3*size}px` }}>3</div>
                <div className="border-1 border-white" style={{ gridColumn: "4 / span 2", gridRow: "14 / span 2", width: `${2*size}px`, height: `${2*size}px` }}>2</div>
                <div className="border-1 border-white" style={{ gridColumn: 4, gridRow: 16, width: `${size}px`, height: `${size}px` }}>1</div>
                <div className="border-1 border-white" style={{ gridColumn: 5, gridRow: 16, width: `${size}px`, height: `${size}px` }}>1</div>
                <div className="border-1 border-white" style={{ gridColumn: "1 / span 5", gridRow: "17 / span 5", width: `${5*size}px`, height: `${5*size}px` }}>5</div>
                <div className="border-1 border-white" style={{ gridColumn: "6 / span 8", gridRow: "14 / span 8", width: `${8*size}px`, height: `${8*size}px` }}>8</div>
            </div>
        </main>
    );
}