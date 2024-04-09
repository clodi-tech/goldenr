const sizes = [ 1, 1, 2, 3, 5, 8, 13, 21 ];
const unit = 10;

export default function Rect() {
    return (
        <main>
            <div>
            {sizes.map((size, index) => (
                <div key={index}
                    className="text-center"
                    style={{
                        width: `${size * unit}px`,
                        height: `${size * unit}px`,
                        border: '1px solid white',
                        display: 'inline-block',
                    }}>
                    {size}
                </div>
            ))}
            </div>
        </main>
    );
}