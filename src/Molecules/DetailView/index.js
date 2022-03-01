import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar";


const DetailView = props =>{

    const [info, setInfo] =useState(null)

    let params =useParams()

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/'+params.lugarId+"/").then(response=>response.json()).then(data=>setInfo(data))
    },[])

    
    return(
    <div>
    
        <NavBar links={[
            {route:'/lugares', text:'Lugares'},]}>

        </NavBar>
        {info && <Box sx={{display:"flex", margin:3, marginTop:10}}>
            <img style={{width:"40%", height:"50vh"}} src={info.link_img}/>
            <div style={{width:"60%", margin:12}}>
            <Typography variant={'h3'}>{info.name}</Typography>
            <Typography sx={{textAlign:"justify"}} variant={'body1'}>{info.description}</Typography>
            <p>Region : {info.region}</p>
            <p>Departamento : {info.departamento}</p>
            </div>

        </Box>}


    </div>
)}

export default DetailView