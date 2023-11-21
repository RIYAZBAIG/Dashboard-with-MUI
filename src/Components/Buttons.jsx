import React, { useEffect } from 'react';
import { Grid, Card,CardContent,Button,Box } from '@mui/material';
const Buttons = () => {


  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/jewelery")
    .then(response => response.json())
    .then (json => console.log(json))
            
   },[]);
  return (
    <div style={{ marginLeft: '175px', marginTop: '50px' }}>

        <h1>Hello Buttons</h1>
        <Grid>
            <Card>
                <CardContent>
                <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Box>
                </CardContent>
            </Card>
            
        </Grid>
      
    </div>
  );
}

export default Buttons;
