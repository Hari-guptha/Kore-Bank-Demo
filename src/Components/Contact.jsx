import React from 'react'
import Map from '../assets/Image/Map.png'
import { TextField } from '@mui/material'

const Contact = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div id='maincontact'>
                <h2 style={{ textAlign: "center", margin: "5% 0px" }}>Contact Us</h2>
                <div style={{ display: "flex", gap: 20 }}>
                    <img style={{ width: "400px" }} src={Map} alt="Map" />
                    <div style={{ display: "flex", flexDirection: "column",marginLeft:"50px",width:"600px"}}>
                        <TextField sx={{marginTop:"10%",width:"100%"}} id="outlined-basic" label="Email" placeholder='Enter your Email' variant="outlined" />
                        <TextField sx={{marginTop:"10%",width:"100%"}} id="outlined-basic" label="Message" placeholder='Enter the message' variant="outlined" />
                        <div style={{display:"flex",justifyContent:"center"}}>
                        <h4 style={{marginTop:"10%",textAlign:"center",width:"100px"}} id='btn'>Send</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact