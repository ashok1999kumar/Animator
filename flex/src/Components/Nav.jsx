import React from 'react'

export const Nav = () => {
    return (
        <div style={{display:"flex",padding:"1rem",
        
        }}>
           <div style={{flex:13, borderRadius:"50%",width:"2rem", height:"2rem"}}>
            circle
           </div>
           <div style={{flex:5}}>
                <ul style={{display:"flex", listStyle:"none", justifyContent:"space-between"}}>
                    <li><a href="#" style={{textDecoration:"none"}}>One</a></li>
                    <li><a href="#" style={{textDecoration:"none"}}>Two</a></li>
                    <li><a href="#" style={{textDecoration:"none"}}>Three</a></li>
                    <li><a href="#" style={{textDecoration:"none"}}>Four</a></li>
                </ul>
           </div> 
        </div>
    )
}
