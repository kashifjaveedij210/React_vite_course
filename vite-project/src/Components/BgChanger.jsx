import React, { useState } from 'react';

const BgChanger = () => {
    const [color, setColor] =useState('gray')
    return (
        <div style={{backgroundColor:color,width:"100vw",height:"100vh"}}>
            <div >
                <button onClick={()=>setColor("red")}>
                    red
                </button>
                <button onClick={()=>setColor('blue')}>
                    blue
                </button>
                <button onClick={()=>setColor('black')}>
                    black
                </button>
            </div>
        </div>
    );
};

export default BgChanger;