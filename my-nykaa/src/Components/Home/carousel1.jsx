import React from 'react'
import Carousel from 'better-react-carousel'

function Gallery1(){
  return (
    <Carousel cols={1} rows={1} gap={10} loop={true}  autoplay="1000" breakpoint="800" >
      <Carousel.Item>
        <img width="100%" src="https://images-static.nykaa.com/uploads/439d01a8-aa05-462d-9c25-6ef5dee9a4fd.jpg?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images-static.nykaa.com/uploads/ccda834c-cde1-4a90-8025-b2b547f68a69.jpg?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images-static.nykaa.com/uploads/11f490f1-9821-4e7b-8289-f23914d4b7fb.jpg?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://images-static.nykaa.com/uploads/be2b991e-e469-412d-8ec7-f10a9490a96b.gif?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://images-static.nykaa.com/uploads/b0ed9258-5212-454d-af4e-89c5c543172c.jpg?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://images-static.nykaa.com/uploads/2c5d305a-694e-41ba-94df-4af938e321d4.jpg?tr=w-1200,cm-pad_resize" />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}
export default Gallery1;