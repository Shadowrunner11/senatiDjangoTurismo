import styled from '@emotion/styled';
import { Box, Card, CardMedia, CardContent, Button, Typography, CardActions } from '@mui/material'
import { VectorMap } from '@south-paw/react-vector-maps'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar'
import peru from './peru';

const Map = styled.div`
  margin: 75px auto;
  width: 500px;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #1976d2;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(168,43,43,0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(168,43,43,0.6);
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: rgba(56,43,168,1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: rgba(56,43,168,0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: rgba(56,43,168,0.6);
      }
    }
  }
`;

export default function Mapa() {
  const [hovered, setHovered] = useState('None');
  const [focused, setFocused] = useState('None');
  const [clicked, setClicked] = useState();

  const [lugar, setPlace] = useState();

  useEffect(()=>{
    if(clicked) 
    return fetch(`http://127.0.0.1:8000/departamento/${clicked}/`)
        .then(response=>response.json())
        .then(data=>{
            setPlace(data)
            console.log(data)

        })
  }, [clicked])
  useEffect(()=>{
    document.getElementById('container__card')?.scrollIntoView({behavior:"smooth"})
  }, [lugar])

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onBlur: ({ target }) => setFocused('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  };
  return (
    <div>
        <NavBar 
            links={[
                {route:'/lugares', text:'Lugares'},
                {route:'/Mapa', text:'Mapa'}
            ]}>
        </NavBar>
        <Box>
            <Map>
            <VectorMap layerProps={layerProps} {...peru}/>
            <p style={{position: 'absolute'}}
                >Hovered: {hovered && <code>{hovered}</code>}</p>
            </Map>
            <hr />
            <p>Focused: {focused && <code>{focused}</code>}</p>
            <p>Clicked: {clicked && <code>{clicked}</code>}</p>
            {lugar &&
            <div id="container__card">
                <Card sx={{ maxWidth: 345, margin:4, background: "LightSlateGray", color:"azure" }}>
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
                </div>
            }
        </Box>
    </div>
  )
}
