import React from 'react'

const MiddleBar = () => {
    return (
        <div style={{padding:"20px 0px",background:"white"}}>
            <div style={{ display: "flex", gap: 40 }}>
            <h4 style={{marginLeft:"7%"}} id="navtext2">INSURANCE</h4>
            <h4 id="navtext2">REALTY</h4>
            <h4 id="navtext2">INVESTMENT</h4>
            <h4 id="navtext2">Branches & ATMs</h4>
            <div style={{ display: "flex", gap: 20,marginLeft:"10%" }}>
            <input id='input' type="text" placeholder='UserName' />
            <input id='input' type="text" placeholder='Password' />
            <a id='btn'>Login</a>
            </div>
            </div>
            
        </div>
    )
}

export default MiddleBar
