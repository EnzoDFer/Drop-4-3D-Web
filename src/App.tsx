import { Button, Container } from "@mantine/core";
import { useEffect, useState } from "react";
import GameProvider from "./GameProvider";

function App() {  
  const [rotation,setRotation] = useState('front');
  const [transform,setTransform] = useState('');
  let test = 'rotateY(90deg)'

  useEffect(()=>{
    console.log('new rotation'+rotation+transform);
    
    switch (rotation) {
      case 'right':
        setTransform('rotateY(-90deg)');
        break;
      case 'left':
        setTransform('rotateY(90deg)');
        break;  
      case 'back':
        setTransform('rotateY(180deg)');
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
        height:'100%',
        width: '100%',
        display: 'grid',
        gridAutoRows:'2fr 8fr'
      }}
    >
      <Container
        sx={{
          '&+div>div':{
            transform: transform,
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
      <GameProvider/>
    </Container>
  );
}

export default App;

