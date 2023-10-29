import React from "react";
import Toilet_BP from "./toilet_BP";
import Toilet_EP from "./toilet_EP";
import Text_Temp from "./text_temp";
import Text_Process from "./text_process";
import Temp_Value from "./val_temp";
import Wip_Val from "./wip";
import Process_Zone from "./process_zone";

const Dashboard = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="1628px" height="1031px" viewBox="-0.5 -0.5 1628 1031" content="<mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2023-10-28T16:35:58.836Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203&quot; etag=&quot;ZbjwANjAAsEYqr-uwkk3&quot; version=&quot;20.8.5&quot; type=&quot;google&quot;><diagram id=&quot;CtjVcW7jsToqshqA-c7L&quot; name=&quot;Page-1&quot;>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</diagram></mxfile>" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <defs />
                <g>
                    <rect x="4.25" y="0.75" width="1622.5" height="1028.5" rx="10.29" ry="10.29" fill="#f9f9f9" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={1} y={40} width={550} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '548px', height: '1px', paddingTop: '55px', marginLeft: '2px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '17px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <b>
                                                <font style={{ fontSize: '38px' }}><font color="#127b96">900</font>
                                                    FACTORY <font color="#828231">INNOVATION</font></font>
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={276} y={60} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="17px" textAnchor="middle">900 FACTORY INNOVATION</text>
                        </switch>
                    </g>
                    <Toilet_BP />
                    <Toilet_EP />
                    <Process_Zone />
                    <Wip_Val />
                    <Text_Temp />
                    <Temp_Value />
                    <Text_Process />
                    <path d="M 41 306.9 L 133.23 306.9 L 133.23 300 L 161 315 L 133.23 330 L 133.23 323.1 L 41 323.1 Z" fill="#d5e8d4" stroke="#82b366" strokeWidth={2} strokeMiterlimit={10} pointerEvents="all" />
                </g>
                <switch>
                    <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
                    <a transform="translate(0,-5)" xlinkHref="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank">
                        <text textAnchor="middle" fontSize="10px" x="50%" y="100%">Text is not SVG - cannot
                            display</text>
                    </a>
                </switch>
            </svg>
        </>
    )
}

export default Dashboard