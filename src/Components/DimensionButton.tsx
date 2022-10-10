import { Button } from "@mantine/core";
import { useState } from "react";

export const DimensionButton = () => {
  const [is3D,set3D] = useState(false);
  
  return (
    <Button 
      variant="subtle" 
      color="black"
      size="lg" 
      uppercase
      onClick={()=>set3D(!is3D)}
      sx={{
        display:'block',
        textAlign:'center',
        marginLeft:'auto',
        marginRight:'auto',
        '&:hover':{
          background:'transparent',
        },
        '&~div[id="scene"]':{
          perspective: is3D?'1600px':'',
        }
      }}
    >
      3D View
    </Button>
  );
}