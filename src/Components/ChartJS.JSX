import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';

const ChartJS = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={3}>
        <Card>
          <CardContent>
            {/* Content for Card 1 */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card>
          <CardContent>
            {/* Content for Card 2 */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card>
          <CardContent>
            {/* Content for Card 3 */}
            <h1>dkajsdksajkl</h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card>
          <CardContent>
            {/* Content for Card 4 */}
            <h1>dkjfklsd</h1>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ChartJS;
