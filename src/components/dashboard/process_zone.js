import React from "react";

const Process_Zone = () => {
    const rectData = [
        { id: "ra1-1", x: 391, y: 123.5, width: 150, height: 170, rx: 7.5, ry: 7.5, fill: "#fff2cc", status: 0 },
        { id: "ra1-2", x: 391, y: 340, width: 150, height: 350, rx: 7.5, ry: 7.5, fill: "#ffffff", status: 0 },
        { id: "fmb1-1", x: 551, y: 43.5, width: 360, height: 70, rx: 3.5, ry: 3.5, fill: "#ffffff", status: 0 },
        { id: "pwb1-1", x: 551, y: 123.5, width: 240, height: 170, rx: 6.8, ry: 6.8, fill: "#ffffff", status: 0 },
        { id: "pwa1-1", x: 551, y: 340, width: 240, height: 470, rx: 4.8, ry: 4.8, fill: "#ffffff", status: 0 },
        { id: "fma1-1", x: 551, y: 820, width: 240, height: 170, rx: 8.5, ry: 8.5, fill: "#ffffff", status: 0 },
        { id: "dp1-1", x: 801, y: 123.5, width: 110, height: 170, rx: 5.5, ry: 5.5, fill: "#ffffff", status: 0 },
        { id: "dp1-2", x: 801, y: 340, width: 110, height: 380, rx: 5.5, ry: 5.5, fill: "#ffffff", status: 0 },
        { id: "newline1-1", x: 921, y: 43.5, width: 450, height: 70, rx: 3.5, ry: 3.5, fill: "#ffffff", status: 0 },
        { id: "st1-1", x: 921, y: 123.5, width: 340, height: 170, rx: 5.1, ry: 5.1, fill: "#ffffff", status: 0 },
        { id: "st1-2", x: 922.99, y: 338, width: 340, height: 380, rx: 6.8, ry: 6.8, fill: "#ffffff", status: 0 },
        { id: "mo1-1", x: 1271, y: 123.5, width: 100, height: 170, rx: 5, ry: 5, fill: "#ffffff", status: 0 },
        { id: "mo1-2", x: 1271, y: 340, width: 100, height: 380, rx: 5, ry: 5, fill: "#ffffff", status: 0 },
        { id: "ag1-1", x: 1278, y: 820, width: 313, height: 170, rx: 6.8, ry: 6.8, fill: "#ffffff", status: 0 },
        { id: "tft1-1", x: 1381, y: 340, width: 210, height: 470, rx: 8.4, ry: 8.4, fill: "#ffffff", status: 0 },
        { id: "r1-1", x: 1381, y: 123.5, width: 210, height: 170, rx: 6.8, ry: 6.8, fill: "#ffffff", status: 0 },
        { id: "relexEP1-1", x: 1381, y: 43.5, width: 210, height: 70, rx: 3.5, ry: 3.5, fill: "#ffffff", status: 0 }
    ];

    return (
        <>
            {
                rectData.map(item => (
                    <rect
                        key={item.id}
                        id={item.id}
                        x={item.x}
                        y={item.y}
                        width={item.width}
                        height={item.height}
                        rx={item.rx}
                        ry={item.ry}
                        fill={item.status === 0 ? "#ffffff" : "#fff2cc"}
                        stroke={item.status === 0 ? "rgb(0, 0, 0)" : "#d6b656"}
                        strokeWidth={2}
                        pointerEvents="all"
                    />
                ))
            }
        </>
    )
}

export default Process_Zone