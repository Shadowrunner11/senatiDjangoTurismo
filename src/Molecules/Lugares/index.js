import { Box} from "@mui/system"
import { CardMedia, CardContent, Button, Typography, Card, CardActions } from "@mui/material"
import NavBar from "../../components/navBar"
import { useEffect, useState } from "react"

const Lugares = props =>{

    const [lugares, setLugares]=useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000').then(response=>response.json()).then(data=>setLugares(data))
    },[])

    return(
        <div>
            <NavBar links={[
                {route:'/lugares', text:'Lugares'},
                {route:'/Mapa', text:'Mapa'}
            ]}>
            </NavBar>
            
            <Box sx={{display:'flex',marginTop: 10}} >
            {lugares.map((lugar, i)=>(
                <Card key={`card-${i}`} sx={{ maxWidth: 345, margin:4, background: "LightSlateGray", color:"azure" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={lugar.link_img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {lugar.name}
                    </Typography>
                    <Typography sx={{textAlign:'justify'}} variant="body2" color="white">
                    {lugar.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={`/lugares/detail/${lugar.id}`} sx={{color:'Moccasin'}} size="small">Ver mas</Button>

                </CardActions>
                </Card>
                ))}
            
            </Box>
        </div>
    )
}

export default Lugares