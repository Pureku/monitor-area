import React from "react";



const Avai_Val = ({ m, w }) => {
    return (
        <>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '58px', height: '1px', paddingTop: '805px', marginLeft: '946px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <b>
                                        <font style={{ fontSize: '28px' }}>{m}</font>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={975} y={809} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">2</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '58px', height: '1px', paddingTop: '805px', marginLeft: '1099px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <b>
                                        <font style={{ fontSize: '28px' }}>{w}</font>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1128} y={809} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">6</text>
                </switch>
            </g>
        </>
    )
}

const Toilet_EP = () => {

    const rectData = [
        { id: "M2-1", x: 880, y: 890, width: 91, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "M2-2", x: 880, y: 934, width: 91, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W2-1", x: 1151, y: 773, width: 91, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W2-2", x: 1151, y: 817, width: 91, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W2-3", x: 1151, y: 861, width: 91, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W2-4", x: 1151, y: 905, width: 91, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, pointerEvents: "all", status: 0 },
        { id: "W2-5", x: 1061, y: 910, width: 91, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, transform: "rotate(90,1106.5,930)", pointerEvents: "all", status: 0 },
        { id: "W2-6", x: 1017, y: 910, width: 91, height: 40, rx: 6, ry: 6, fill: "#d5e8d4", stroke: "#82b366", strokeWidth: 2, transform: "rotate(90,1062.5,930)", pointerEvents: "all", status: 0 }
    ];


    return (
        <>
            <rect x="902.57" y="626.8" width={260} height="466.4" rx="5.2" ry="5.2" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} transform="rotate(-90,1032.57,860)" pointerEvents="all" />
            <rect x={875} y={740} width={130} height={240} rx="6.5" ry="6.5" fill="#dae8fc" stroke="#6c8ebf" strokeWidth={2} pointerEvents="all" />
            <rect x="1016.25" y="741.25" width={240} height="237.5" rx="7.13" ry="7.13" fill="#ffe6cc" stroke="#d79b00" strokeWidth={2} transform="rotate(-90,1136.25,860)" pointerEvents="all" />


            {
                rectData.map(item => (
                    <rect
                        key={item.id}
                        id={item.id}
                        x={item.x}
                        y={item.y}
                        width={91}
                        height={40}
                        rx={6}
                        ry={6}
                        fill={item.status === 0 ? "#d5e8d4" : "#f8cecc"}
                        stroke={item.status === 0 ? "#82b366" : "#b85450"}
                        strokeWidth={2}
                        pointerEvents={item.pointerEvents}
                        transform={item.transform}
                    />
                ))
            }



            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '89px', height: '1px', paddingTop: '910px', marginLeft: '881px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    M2-1</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={926} y={914} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">M2-1</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '89px', height: '1px', paddingTop: '954px', marginLeft: '881px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    M2-2</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={926} y={958} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">M2-2</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '89px', height: '1px', paddingTop: '793px', marginLeft: '1152px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W2-1</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1197} y={797} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W2-1</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '89px', height: '1px', paddingTop: '837px', marginLeft: '1152px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W2-2</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1197} y={841} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W2-2</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '89px', height: '1px', paddingTop: '881px', marginLeft: '1152px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W2-3</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1197} y={885} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W2-3</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '89px', height: '1px', paddingTop: '925px', marginLeft: '1152px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W2-4</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1197} y={929} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W2-4</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)rotate(90 1106.5 930)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '89px', height: '1px', paddingTop: '930px', marginLeft: '1062px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W2-5</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1107} y={934} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W2-5</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)rotate(90 1062.5 930)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '89px', height: '1px', paddingTop: '930px', marginLeft: '1018px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    W2-6</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1063} y={934} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">W2-6</text>
                </switch>
            </g>
            <Avai_Val m={2} w={6} />
            <g transform="translate(-0.5 -0.5)rotate(-90 836 860)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '248px', height: '1px', paddingTop: '860px', marginLeft: '712px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>Toilet
                                    2 Available</div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={836} y={868} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Toilet 2 Available</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '78px', height: '1px', paddingTop: '769px', marginLeft: '905px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>Available</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={944} y={773} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">Available</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '78px', height: '1px', paddingTop: '769px', marginLeft: '1039px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>Available</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1078} y={773} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">Available</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '58px', height: '1px', paddingTop: '805px', marginLeft: '897px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>MAN</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={926} y={809} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">MAN</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '58px', height: '1px', paddingTop: '805px', marginLeft: '1039px' }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>WOMAN</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={1068} y={809} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">WOMAN</text>
                </switch>
            </g>
            <g transform="translate(-0.5 -0.5)rotate(-90 857.1749999999997 182)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%" requiredfeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '44px', height: '1px', paddingTop: '182px', marginLeft: '835px' }}>
                            <div data-drawio-colors="color: #314981; " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', fontSize: '38px', fontFamily: 'Helvetica', color: 'rgb(49, 73, 129)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                    <font style={{ fontSize: '20px' }}>25</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text x={857} y={193} fill="#314981" fontFamily="Helvetica" fontSize="38px" textAnchor="middle">25</text>
                </switch>
            </g>

        </>
    );
}

export default Toilet_EP