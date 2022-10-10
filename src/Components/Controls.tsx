import { SegmentedControl } from "@mantine/core";
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
    <SegmentedControl
      fullWidth
      onChange={setRotation}
      sx={{

        '&+div>div':{
          transform: transform+' translateZ(-150px)',
        }
      }}
      data={[
        {label: 'Show Left', value:'left'},
        {label: 'Show Front', value:'front'},
        {label: 'Show Right', value:'right'},
        {label: 'Show Top', value:'top'},
        {label: 'Show Back', value:'back'},
      ]}
    >
    </SegmentedControl>
  );
}