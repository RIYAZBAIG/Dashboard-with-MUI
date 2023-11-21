import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const General = () => {
  const cardStyle = {
    background: '#007bff',
    color: 'white',
    marginBottom: '16px',
  };
  const cardStyle1 = {
    background: '  #e83e8c',
    color: 'white',
    marginBottom: '16px',
  };


  const cardStyle2 = {
    background: '#ffc107',
    color: 'white',
    marginBottom: '16px',
  };


  const disabledCardStyle = {
    background: 'lightgrey',
    color: 'black',
    marginBottom: '16px',
  };

  const disabledCardStyle1 = {
    background: 'grey',
    color: 'black',
    marginBottom: '16px',
    
  };

  return (
    <div style={{ marginLeft: '175px', marginTop: '50px' }}>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Primary</Typography>
              <p>Content for the primary card</p>
            </CardContent>
          </Card>
          <Card style={disabledCardStyle}>
            <CardContent>
              <Typography variant="h6">Disabled</Typography>
              <p>Content for the disabled card</p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
        <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Primary</Typography>
              <p>Content for the primary card</p>
            </CardContent>
          </Card>
          <Card style={disabledCardStyle}>
            <CardContent>
              <Typography variant="h6">Disabled</Typography>
              <p>Content for the disabled card</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card style={cardStyle2}>
            <CardContent>
              <Typography variant="h6">Primary</Typography>
              <p>Content for the primary card</p>
            </CardContent>
          </Card>
          <Card style={disabledCardStyle}>
            <CardContent>
              <Typography variant="h6">Disabled</Typography>
              <p>Content for the disabled card</p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
        <Card style={cardStyle1}>
            <CardContent>
              <Typography variant="h6">Primary</Typography>
              <p>Content for the primary card</p>
            </CardContent>
          </Card>
          <Card style={disabledCardStyle1}>
            <CardContent>
              <Typography variant="h6">Disabled</Typography>
              <p>Content for the disabled card</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default General;
