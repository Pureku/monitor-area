import React from "react";

const Box = ({ id, x, y }) => {
    const width = 120;
    const height = 40;
    return (
        <g transform={`translate(${x - 0.5} ${y - 0.5})`}>
            <rect
                id={id}
                x={56}
                y={y}
                width={width}
                height={height}
                rx={6}
                ry={6}
                fill="#d5e8d4"
                stroke="#82b366"
                strokeWidth={2}
                pointerEvents="all"
            />
            <switch>
                <foreignObject
                    pointerEvents="none"
                    width="100%"
                    height="100%"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{ overflow: 'visible', textAlign: 'left' }}
                >
                    <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: `${width - 2}px`,
                            height: '1px',
                            paddingTop: `${y + height / 2}px`,
                            marginLeft: '57px',
                        }}
                    >
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                            <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x={116} y={y + height / 2 + 4} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">
                    {id}
                </text>
            </switch>
        </g>
    );
};

const data = [
    { id: 'W1-8', s: 0 },
    { id: 'W1-7', s: 0 },
    { id: 'W1-6', s: 1 },
    { id: 'W1-5', s: 1 },
    { id: 'W1-4', s: 0 },
    { id: 'W1-3', s: 1 },
    { id: 'W1-2', s: 0 },
    { id: 'W1-1', s: 1 },
    { id: 'M1-4', s: 0 },
    { id: 'M1-3', s: 1 },
    { id: 'M1-2', s: 1 },
    { id: 'M1-1', s: 0 },
];

const Toi = () => {
    const boxes = [
        { id: 'W1-8', x: 56, y: 635 },
        { id: 'W1-7', x: 56, y: 679 },
        { id: 'W1-6', x: 56, y: 723 },
        { id: 'W1-5', x: 56, y: 767 },
        { id: 'W1-4', x: 56, y: 811 },
        { id: 'W1-3', x: 56, y: 855 },
        { id: 'W1-2', x: 56, y: 899 },
        { id: 'W1-1', x: 56, y: 943 },
        { id: 'M1-4', x: 56, y: 421.5 },
        { id: 'M1-3', x: 56, y: 465.5 },
        { id: 'M1-2', x: 56, y: 509.5 },
        { id: 'M1-1', x: 56, y: 553.5 },
    ];

    return (
        <>
            {boxes.map((box, index) => (
                <Box key={index} {...box} />
            ))}
        </>
    );
};

export default Toi;