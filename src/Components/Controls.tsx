import { Container, Button } from "@mantine/core";
import { useState, useEffect } from "react";

export const Controls = () => {
  const [rotation,setRotation] = useState('front');
  const [transform,setTransform] = useState('');

  useEffect(()=>{
    switch (rotation) {
      case 'right':
        setTransform('rotateY(-90deg)');
        break;
      case 'left':
        setTransform('rotateY(90deg)');
        break;  
      case 'back':
        if (transform==='rotateY(-90deg)') {
          setTransform('rotateY(-180deg)');
        } else if ('rotateY(90deg)') {
          setTransform('rotateY(180deg)');
        }
        break; 
      case 'top':
        setTransform('rotateX(-90deg)');
        break; 
      default:
        //front
        setTransform('');
    }
  },[rotation]);
  
  return (
    <Container
      sx={{
        '&+div>div':{
          transform: transform+' translateZ(-150px)',
        }
      }}
    >
      <Button
        onClick={()=>setRotation('left')}
      >Show Left</Button>
      <Button
        onClick={()=>setRotation('front')}
      >Show Front</Button>
      <Button
        onClick={()=>setRotation('right')}
      >Show Right</Button>
      <Button
        onClick={()=>setRotation('top')}
      >Show Top</Button>
      <Button
        onClick={()=>setRotation('back')}
      >Show Back</Button>
    </Container>
  );
}