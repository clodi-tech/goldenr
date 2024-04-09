const size = 10;

export default function Rect() {
    return (
        <main>
            <div className="grid grid-cols-13 grid-rows-8">
                <div className="border-1 border-white w-30 h-30" style={{ gridColumn: "1 / span 3", gridRow: "1 / span 3" }}>3</div>
                <div className="border-1 border-white w-20 h-20" style={{ gridColumn: "4 / span 2", gridRow: "1 / span 2" }}>2</div>
                <div className="border-1 border-white w-10 h-10" style={{ gridColumn: 4, gridRow: 3 }}>1</div>
                <div className="border-1 border-white w-10 h-10" style={{ gridColumn: 5, gridRow: 3 }}>1</div>
                <div className="border-1 border-white w-50 h-50" style={{ gridColumn: "1 / span 5", gridRow: "4 / span 5" }}>5</div>
                <div className="border-1 border-white w-80 h-80" style={{ gridColumn: "6 / span 8", gridRow: "1 / span 8" }}>8</div>

            </div>
        </main>
    );
}
