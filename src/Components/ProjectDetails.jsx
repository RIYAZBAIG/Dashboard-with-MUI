import React from 'react';
import { Grid,Card,CardContent } from '@mui/material';
const ProjectDetails = () => {
  return (
    <div style={{ marginLeft: '205px', marginTop: '50px' }}>

<Grid container spacing={2}>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <p>Estimated budget</p>
            <p>2300</p>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card>
          <CardContent>
            <p>Total Amout Budget</p>
            <p>4502</p>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card>
          <CardContent>
            <p>Estimated project duration</p>
            <p>25</p>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card>
          <CardContent>
          <p>Estimated budget</p>
            <p>258</p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
}

export default ProjectDetails;