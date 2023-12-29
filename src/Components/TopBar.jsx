import { Box } from '@mui/material'
import React from 'react'

const TopBar = () => {
return (
    <div style={{display:"flex"}}>
        <Box sx={{width:"100%",height:'30px',background:"black",color:"white",textAlign:"center",paddingTop:"10px",fontSize:"15px"}}> 
    Fraud is on the rise, learn how to protect yourself.
    <span style={{textDecoration:"underline",paddingLeft:"10px"}}>Learn more.</span>
    </Box>
    <Box sx={{width:"100%",height:'30px',background:"black",color:"white",textAlign:"center",paddingTop:"10px",fontSize:"15px"}}> 
    KORE ROUTING NUMBER:
    <span style={{textDecoration:"underline",paddingLeft:"10px"}}>(555) 123-4567</span>
    </Box>
    </div>
)
}

export default TopBar