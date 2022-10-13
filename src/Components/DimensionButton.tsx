import { Button } from "@mantine/core";
import { useState } from "react";

export const DimensionButton = () => {
  const [is3D,set3D] = useState(true);
  
  return (
    <Button 
      variant="subtle" 
      color="dark"
      size="lg" 
      uppercase
      onClick={()=>set3D(!is3D)}
      sx={{
        border:'2px solid black',
        transformStyle:'flat',
        display:'block',
        background: 'white',
        textAlign:'center',
        margin:'2rem auto 2rem auto',
        '&:hover':{
          background:'white',
        },
        '&~div[id="scene"]':{
          perspective: is3D?'1600px':'',
        }
      }}
    >
      3D View Toggle
    </Button>
  );
}