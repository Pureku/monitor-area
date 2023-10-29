import React from "react";

const Avai_Val = ({ m, w }) => {
    return (
        <>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '58px', height: '1px', paddingTop: '482px', marginLeft: '302px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <b>
                                        <font style={{ fontSize: '28px' }}>{m}</font>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={331} y={485} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">4</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '58px', height: '1px', paddingTop: '714px', marginLeft: '302px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <b>
                                        <font style={{ fontSize: '28px' }}>{w}</font>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={331} y={717} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">8</text>
                </switch>
            </g>
        </>
    )
}

const Toilet_BP = () => {

    const rectData = [
        { id: "W1-8", x: 56, y: 635, width: 119, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W1-7", x: 56, y: 679, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W1-6", x: 56, y: 723, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W1-5", x: 56, y: 767, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 1 },
        { id: "W1-4", x: 56, y: 811, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W1-3", x: 56, y: 855, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W1-2", x: 56, y: 899, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W1-1", x: 56, y: 943, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "M1-4", x: 56, y: 421.5, width: 119, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "M1-3", x: 56, y: 465.5, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "M1-2", x: 56, y: 509.5, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "M1-1", x: 56, y: 553.5, width: 120, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 }
    ];
    return (
        <>
            <rect x={41} y={338} width={340} height={660} rx="6.8" ry="6.8" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
            <rect x={51} y={400} width={320} height={220} rx={11} ry={11} fill="#dae8fc" stroke="#6c8ebf" strokeWidth={2} pointerEvents="all" />
            <rect x={51} y={628} width={320} height={360} rx="12.8" ry="12.8" fill="#ffe6cc" stroke="#d79b00" strokeWidth={2} pointerEvents="all" />

            {rectData.map(item => (
                <rect
                    key={item.id}
                    id={item.id}
                    x={item.x}
                    y={item.y}
                    width={120}
                    height={40}
                    rx={6}
                    ry={6}
                    fill={item.status === 0 ? "#d5e8d4" : "#f8cecc"}
                    stroke={item.status === 0 ? "#82b366" : "#b85450"}
                    strokeWidth={2}
                    pointerEvents={item.pointerEvents}
                />
            ))}

            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '117px', height: '1px', paddingTop: '655px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W1-8</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={659} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W1-8</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '699px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W1-7</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={703} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W1-7</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '743px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W1-6</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={747} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W1-6</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '787px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W1-5</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={791} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W1-5</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '831px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W1-4</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={835} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W1-4</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '875px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W1-3</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={879} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W1-3</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '919px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W1-2</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={923} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W1-2</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '963px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W1-1</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={967} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W1-1</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '117px', height: '1px', paddingTop: '442px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    M1-4</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={445} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">M1-4</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '486px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    M1-3</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={489} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">M1-3</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '530px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    M1-2</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={533} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">M1-2</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '118px', height: '1px', paddingTop: '574px', marginLeft: '57px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    M1-1</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={116} y={577} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">M1-1</text>
                </switch>
            </g>

            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '248px', height: '1px', paddingTop: '369px', marginLeft: '92px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>Toilet
                                    1 Available</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={216} y={377} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Toilet 1 Available</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '78px', height: '1px', paddingTop: '442px', marginLeft: '262px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>Available</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={301} y={445} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">Available</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '78px', height: '1px', paddingTop: '673px', marginLeft: '262px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>Available</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={301} y={676} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">Available</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '58px', height: '1px', paddingTop: '481px', marginLeft: '252px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>MAN</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={281} y={484} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">MAN</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '58px', height: '1px', paddingTop: '714px', marginLeft: '242px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>WOMAN</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={271} y={717} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">WOMAN</text>
                </switch>
            </g>
            <Avai_Val m={4} w={8} />
        </>
    );
}

export default Toilet_BP