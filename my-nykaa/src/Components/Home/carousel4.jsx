import React from 'react'
import Carousel from 'better-react-carousel'

function Gallery4(){
    const style={width:"90%",margin:"auto"}
  return (
    <div style={style}>
            {/* <h1 style={style}>SOurav</h1> */}
        <Carousel cols={6} rows={1} gap={10} loop={true}  autoplay="1000" breakpoint="800" width="80%"  marginLeft="5%" >
        <Carousel.Item width="100%" margin="auto">
            <img width="100%"src="https://images-static.nykaa.com/uploads/f9cfaae2-c9b4-49ac-a41e-e87d4ad46d62.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/a5fb58d0-4b5a-4f7b-8ce1-6a6f3b04e542.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/174cc9a9-73ce-47b3-8776-a534cfdc929b.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/260c7929-ee2c-4efa-a300-e33afd207f00.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/e3ab0467-73b2-418b-bcb0-9f456d1c9458.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/cc1cff17-5f28-4234-9717-ad64623df694.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/25c00bd4-d1d7-4404-b76d-77466680b7cf.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/bba63b5a-afd3-4e3a-8790-85e077c9aba4.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/8ec7b4cb-d2e6-449e-ae26-04474f18e132.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/b02ec567-2bee-449e-b320-39116cfca7c3.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/1795f3c8-99fe-4c97-b9f7-9f718db79770.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://images-static.nykaa.com/uploads/2c0525c9-8511-4a24-8cbc-4c386df3fd81.jpg?tr=w-200,cm-pad_resize" />
        </Carousel.Item>

        
        {/* ... */}
        </Carousel> 
    </div>
  )
}
export default Gallery4;