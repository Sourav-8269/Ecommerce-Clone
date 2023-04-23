import React from 'react'
import Carousel from 'better-react-carousel'

function Gallery2(){
  return (
    <div >
    <Carousel cols={1} rows={1} gap={10} loop={true}  autoplay={1000} breakpoint="800" width="80%"  marginLeft="5%" >
      <Carousel.Item width="100%" margin="auto">
        <img width="100%" src="https://images-static.nykaa.com/uploads/97dafb2f-f8ab-4824-825a-256458b7eed2.jpg?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images-static.nykaa.com/uploads/d429a036-4015-4d9c-8f78-49880e84f80f.jpg?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images-static.nykaa.com/uploads/cc9ccbb1-14c4-4951-90d7-ea99cf2de320.jpg?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
     
      {/* ... */}
    </Carousel>
    </div>
  )
}
export default Gallery2;