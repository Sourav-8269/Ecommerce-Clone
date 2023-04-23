import React from 'react'
import Carousel from 'better-react-carousel'

function Gallery3(){
    const style={width:"80%",margin:"auto",marginTop:"5%"}
  return (
    <div style={style}>
            {/* <h1 style={style}>SOurav</h1> */}
        <Carousel cols={1} rows={1} gap={10} loop={true}  autoplay={1000} breakpoint="800">
        <Carousel.Item width="100%" margin="auto">
            <img width="100%"src="https://images-static.nykaa.com/uploads/67ab467e-3ee0-4507-8be0-e1833c30ccac.jpg?tr=w-1200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/5b47c37e-e0fe-47d7-9c60-f719ff6e75d3.jpg?tr=w-1200,cm-pad_resize" />
        </Carousel.Item>

        
        {/* ... */}
        </Carousel> 
    </div>
  )
}
export default Gallery3;