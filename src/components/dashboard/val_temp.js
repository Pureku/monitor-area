import React from "react";

const Temp_Value = () => {

    const gData = [
        {
            id: "ra-tp-1-1",
            x: 421,
            y: 190,
            fill: "#314981",
            textX: 443,
            textY: 201,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "ra-hm-1-1",
            x: 469,
            y: 190,
            fill: "#314981",
            textX: 491,
            textY: 201,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "ra-tp-1-2",
            x: 421,
            y: 409,
            fill: "#314981",
            textX: 443,
            textY: 420,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "ra-hm-1-2",
            x: 469,
            y: 409,
            fill: "#314981",
            textX: 491,
            textY: 420,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "fmb-tp-1-1",
            x: 716,
            y: 78,
            fill: "#314981",
            textX: 738,
            textY: 89,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "fmb-hm-1-1",
            x: 766,
            y: 78,
            fill: "#314981",
            textX: 788,
            textY: 89,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "pwa-tp-1-1",
            x: 628,
            y: 409,
            fill: "#314981",
            textX: 650,
            textY: 420,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "pwa-hm-1-1",
            x: 676,
            y: 409,
            fill: "#314981",
            textX: 698,
            textY: 420,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "pwb-tp-1-1",
            x: 627,
            y: 190,
            fill: "#314981",
            textX: 649,
            textY: 201,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "pwb-hm-1-1",
            x: 675,
            y: 190,
            fill: "#314981",
            textX: 697,
            textY: 201,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "fma-tp-1-1",
            x: 629,
            y: 885,
            fill: "#314981",
            textX: 652,
            textY: 896,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "fma-hm-1-1",
            x: 678,
            y: 885,
            fill: "#314981",
            textX: 700,
            textY: 896,
            text: "25",
            transform: "translate(-0.5 -0.5)"
        },
        {
            id: "nl-tp-1-1",
            x: 1071,
            y: 78,
            fill: "#314981",
            textX: 1093,
            textY: 89,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "nl-hm-1-1",
            x: 1119,
            y: 78,
            fill: "#314981",
            textX: 1141,
            textY: 89,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "st-tp-1-1",
            x: 1047,
            y: 190,
            fill: "#314981",
            textX: 1047,
            textY: 212,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "st-hm-1-1",
            x: 1095,
            y: 190,
            fill: "#314981",
            textX: 1095,
            textY: 212,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "st-tp-1-2",
            x: 1046,
            y: 406,
            fill: "#314981",
            textX: 1046,
            textY: 429,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "st-hm-1-2",
            x: 1094,
            y: 406,
            fill: "#314981",
            textX: 1094,
            textY: 429,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "relex-hm-1-1",
            x: 1537,
            y: 78,
            fill: "#314981",
            textX: 1560,
            textY: 100,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "rbi-tp-1-1",
            x: 1441,
            y: 190,
            fill: "#314981",
            textX: 1463,
            textY: 212,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "rbi-hm-1-1",
            x: 1489,
            y: 190,
            fill: "#314981",
            textX: 1511,
            textY: 212,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "tft-tp-1-1",
            x: 1441,
            y: 403,
            fill: "#314981",
            textX: 1463,
            textY: 425,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "tft-hm-1-1",
            x: 1489,
            y: 403,
            fill: "#314981",
            textX: 1511,
            textY: 425,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "ag-tp-1-1",
            x: 1391,
            y: 884,
            fill: "#314981",
            textX: 1413,
            textY: 906,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "ag-hm-1-1",
            x: 1439,
            y: 884,
            fill: "#314981",
            textX: 1461,
            textY: 906,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "relex-tp-1-1",
            x: 1489,
            y: 78,
            fill: "#314981",
            textX: 1511,
            textY: 100,
            text: "25",
            transform: "translate(-0.5 -0.5)",
        },
        {
            id: "dp-tp-1-1",
            x: 835,
            y: 229,
            fill: "#314981",
            textX: 857,
            textY: 240,
            text: "25",
            transform: "translate(-0.5 -0.5)rotate(-90 857.1749999999997 229)",
        },
        {
            id: "dp-hm-1-1",
            x: 835,
            y: 182,
            fill: "#314981",
            textX: 857,
            textY: 193,
            text: "25",
            transform: "translate(-0.5 -0.5)rotate(-90 857.1749999999997 182)",
        },
        {
            id: "dp-tp-1-2",
            x: 828,
            y: 672,
            fill: "#314981",
            textX: 850,
            textY: 683,
            text: "25",
            transform: "translate(-0.5 -0.5)rotate(-90 850.1749999999997 672)",
        },
        {
            id: "dp-hm-1-2",
            x: 828,
            y: 625,
            fill: "#314981",
            textX: 850,
            textY: 636,
            text: "25",
            transform: "translate(-0.5 -0.5)rotate(-90 850.1749999999997 625)",
        },
        {
            id: "mo-tp-1-1",
            x: 1305,
            y: 229,
            fill: "#314981",
            textX: 1327,
            textY: 240,
            text: "25",
            transform: "translate(-0.5 -0.5)rotate(-90 1327.1749999999997 229)",
        },
        {
            id: "mo-hm-1-1",
            x: 1305,
            y: 182,
            fill: "#314981",
            textX: 1327,
            textY: 193,
            text: "25",
            transform: "translate(-0.5 -0.5)rotate(-90 1327.1749999999997 182)",
        },
        {
            id: "mo-tp-1-2",
            x: 1293,
            y: 672,
            fill: "#314981",
            textX: 1316,
            textY: 683,
            text: "25",
            transform: "translate(-0.5 -0.5)rotate(-90 1315.5249999999996 672)",
        },
        {
            id: "mo-hm-1-2",
            x: 1293,
            y: 625,
            fill: "#314981",
            textX: 1316,
            textY: 636,
            text: "25",
            transform: "translate(-0.5 -0.5)rotate(-90 1315.5249999999996 625)",
        },

    ];

    return (
        <>
            {
                gData.map(item => (
                    <g transform={item.transform} id={item.id}>
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '44px', height: '1px', paddingTop: `${item.y}px`, marginLeft: `${item.x}px` }}>
                                    <div data-drawio-colors={`color: ${item.fill}; `} style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '38px', fontFamily: 'Helvetica', color: item.fill, lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '20px' }}>{item.text}</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={item.textX} y={item.textY} fill={item.fill} fontFamily="Helvetica" fontSize="38px" textAnchor="middle">{item.text}</text>
                        </switch>
                    </g>
                ))
            }
        </>
    )
}

export default Temp_Value