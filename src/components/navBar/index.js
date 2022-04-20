import {Link, Outlet} from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import './style.css'



const NavBar = props =>(
    <AppBar >
        
        <ul style={{textAlign: "justify", justifyContent: "center", }}>
            <Link to={"/"}>HOME</Link>
            <span style={{marginLeft:"2%"}}>
            {props.links.map((link,i)=>(<span key={`li-${i}`}>{" "} | <Link to={`${link.route}`}>{link.text}</Link></span>))}
            </span>
 
        </ul>
    </AppBar>
    
) 

export default NavBar