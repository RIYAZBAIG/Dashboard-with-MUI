import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {

    
  
  
    
  return (
    <>
    <div className='Slider' style={{marginLeft:"175px", marginTop:"50px"}} >

  
    <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
    <br />
    <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
    <br />
    <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
    </div>

    <div className='Slider' style={{  position:"relative", display:"flex",  marginLeft:"520px", marginTop:"-215px"}} >

  
<Box sx={{ width: 300 }}>
  <Slider
    size="small"
    defaultValue={70}
    aria-label="Small"
    valueLabelDisplay="auto"
  />
  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
</Box>
<br />
<Box sx={{ width: 300 }}>
  <Slider
    size="small"
    defaultValue={70}
    aria-label="Small"
    valueLabelDisplay="auto"
  />
  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
</Box>
<br />
<Box sx={{ width: 300 }}>
  <Slider
    size="small"
    defaultValue={70}
    aria-label="Small"
    valueLabelDisplay="auto"
  />
  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
</Box>


</div>
    </>
  );
}
