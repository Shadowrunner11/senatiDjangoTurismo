import { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel-minimal';

const Header=()=> {
  const [lugares, setLugares] = useState([])


  useEffect(()=>{
    fetch('http://127.0.0.1:8000').then(response=>response.json()).then(data=>setLugares(data.map(e=>({image:e.link_img, caption:e.name}))))
  }, [])

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        
        <div style={{
          padding: "60px 20px"
        }}>
          {lugares.length && <Carousel
            data={lugares}
            time={5000}
            width="100%"
            height="75vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxHeight: "600px",
              margin: "auto",
            }}
          />}
        </div>
      </div>
    </div>
  );
}

export default Header